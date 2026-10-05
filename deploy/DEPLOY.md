# dominikagluszkowska.com — wdrożenie na serwer domowy

Portfolio działa jako kontener na Debian VM (`192.168.1.31`), wystawiony przez Cloudflare Tunnel.
Zastępuje hosting na Netlify.

## Gdzie co leży

| Element | Lokalizacja |
|---|---|
| Pliki usługi na serwerze | `/srv/docker-apps/dominikagluszkowska.com/` |
| Kontener / obraz | `dominikagluszkowska` / `dominikagluszkowska:latest` |
| Port lokalny na serwerze | `127.0.0.1:10012` → `8080` w kontenerze |
| Adres publiczny | `https://dominikagluszkowska.com` |
| Dane, sekrety | brak — strona jest w pełni statyczna |

Obraz buduje się na serwerze w dwóch etapach: Node 22 robi `npm run build` (Next.js, statyczny eksport
do `out/` + kompresja zdjęć), a gotowe pliki serwuje nginx bez roota (`nginx-unprivileged`). Kontener ma system plików tylko do odczytu,
odebrane wszystkie capabilities i `no-new-privileges`.

Każda podstrona to gotowy plik HTML z treścią i metadanymi SEO (`/pl/ai` → `pl/ai.html`).
nginx przekierowuje `/` na `/pl` albo `/en` według języka przeglądarki (`Accept-Language`),
daje cache na rok plikom z `/_next/static/` (hash w nazwie) i `no-cache` stronom HTML,
więc po wdrożeniu odwiedzający od razu dostają nową wersję.

## Wdrożenie przez git clone z GitHuba (obecny sposób)

Repozytorium jest publiczne, więc serwer klonuje je bez tokena. Docelowo można to przenieść na Forgejo z CI/CD.

Pierwszy raz, na serwerze:

```bash
cd /srv/docker-apps
git clone -b feat/nextjs https://github.com/maciekto/portfolio_Dominika_Gluszkowska.git dominikagluszkowska.com
cd dominikagluszkowska.com
sudo docker compose up -d --build
sudo docker ps --filter name=dominikagluszkowska   # po ~10 s: (healthy)
curl -sI http://127.0.0.1:10012/pl/ai | head -1    # HTTP/1.1 200 OK
```

Przejście istniejącej instalacji z wersji Vite (`feat/nowe-zdjecia-nowy-ui`) na Next.js:

```bash
cd /srv/docker-apps/dominikagluszkowska.com && git fetch && git switch feat/nextjs && sudo docker compose up -d --build && sudo docker image prune -f
```

Powrót do wersji Vite: `git switch feat/nowe-zdjecia-nowy-ui` i ten sam `docker compose up -d --build`.

Każda kolejna aktualizacja:

```bash
cd /srv/docker-apps/dominikagluszkowska.com
git pull
sudo docker compose up -d --build
sudo docker image prune -f   # stare obrazy po buildach – dysk systemowy jest ciasny
```

Build pobiera obrazy `node:22-alpine` i `nginx-unprivileged`, paczki npm oraz font Inter z Google Fonts
(next/font zapisuje go w obrazie – strona nie łączy się z Google) — za pierwszym razem trwa kilka minut. Warstwy npm zostają w cache buildera; gdy zabraknie miejsca: `sudo docker builder prune`.

## Wdrożenie z Maca przez rsync (alternatywa)

Z Maca, z katalogu projektu, na gałęzi, którą chcesz wypuścić:

```bash
ssh-add -t 3600 ~/.ssh/debian_server_ed25519
./deploy/deploy.sh
```

Skrypt robi trzy rzeczy:

1. zakłada `/srv/docker-apps/dominikagluszkowska.com/` (jeśli nie ma),
2. wysyła pliki `rsync --delete` (bez `.git`, `node_modules`, `dist`, `nowe/`, `files/`),
3. na serwerze: `sudo docker compose up -d --build`, czeka na `healthy`, sprawdza
   `127.0.0.1:10012` i usuwa stare, nieotagowane obrazy.

`sudo` pyta o hasło raz, w kroku 3.

### Ręcznie, bez skryptu

```bash
ssh debian-server 'mkdir -p /srv/docker-apps/dominikagluszkowska.com'
rsync -az --delete --exclude='.git' --exclude='node_modules' --exclude='dist' \
  --exclude='nowe' --exclude='files' --exclude='.DS_Store' \
  ./ debian-server:/srv/docker-apps/dominikagluszkowska.com/
ssh -t debian-server 'cd /srv/docker-apps/dominikagluszkowska.com && sudo docker compose up -d --build'
```

## Cloudflare — jednorazowo

1. **Domena w Cloudflare.** Dodaj `dominikagluszkowska.com` do konta Cloudflare i u rejestratora
   ustaw nameservery, które poda Cloudflare. Dopóki strefa nie jest „Active”, tunel nie zadziała.
2. **Trasa w tunelu** (Zero Trust → Networks → Tunnels → tunel → Public Hostname → Add):

   | Pole | Wartość |
   |---|---|
   | Subdomain | *(puste)* |
   | Domain | `dominikagluszkowska.com` |
   | Service | `HTTP` · `localhost:10012` |

   Drugi wpis tak samo, z Subdomain `www`.
3. **www → bez www.** Rules → Redirect Rules → szablon „Redirect from WWW to root”
   (301, z zachowaniem ścieżki i query).
4. **HTTPS.** SSL/TLS → Edge Certificates → *Always Use HTTPS* włączone.

Sprawdzenie z zewnątrz (np. z telefonu na LTE albo z Maca):

```bash
curl -sI https://dominikagluszkowska.com/pl/campaign | head -1   # HTTP/2 200
curl -sI https://www.dominikagluszkowska.com/ | grep -i location  # → https://dominikagluszkowska.com/
```

## Po pierwszym wdrożeniu

- **ARCHITECTURE.md** — dopisać wiersz w „Published hostnames” (`dominikagluszkowska.com` →
  `http://localhost:10012`) i w „Services” (`dominikagluszkowska`, `127.0.0.1`, 10012 → 8080).
- **Netlify** — gdy domena działa przez tunel, wyłączyć automatyczne deploye z `master`
  albo usunąć stronę w panelu Netlify.

## Diagnostyka

```bash
ssh debian-server 'sudo docker ps --filter name=dominikagluszkowska'
ssh debian-server 'sudo docker logs --tail 50 dominikagluszkowska'
ssh debian-server 'curl -s http://127.0.0.1:10012/healthz'           # ok
ssh debian-server 'curl -sI http://127.0.0.1:10012/pl/ai | head -1'  # 200 – podstrona jako statyczny HTML
ssh debian-server 'curl -sI -H "Accept-Language: pl" http://127.0.0.1:10012/ | grep -i location'  # /pl
```

## Wycofanie zmian

```bash
git switch --detach <poprzedni-commit>
./deploy/deploy.sh
git switch -   # powrót na gałąź
```

## Lockfile

`package-lock.json` jest w repozytorium, więc build robi `npm ci` i instaluje dokładnie przetestowane wersje.
Po każdej zmianie zależności lockfile trzeba wygenerować **bez `node_modules`** (w czystym katalogu albo po
`rm -rf node_modules`), inaczej npm zapisze w nim tylko paczki natywne dla macOS, a build na serwerze (Linux)
wywali się na bibliotece `sharp`.
