#!/usr/bin/env bash
# Wdrożenie portfolio na serwer domowy.
# Odpalasz na Macu z dowolnego miejsca: ./deploy/deploy.sh
# Wymaga klucza w agencie: ssh-add -t 3600 ~/.ssh/debian_server_ed25519
set -euo pipefail

HOST="debian-server"
DIR="/srv/docker-apps/dominikagluszkowska.com"
CONTAINER="dominikagluszkowska"
PORT="10012"

cd "$(dirname "$0")/.."

echo "==> Gałąź: $(git branch --show-current) @ $(git log --oneline -1)"
if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
  echo "UWAGA: masz niezacommitowane zmiany – wdrożą się razem z resztą."
fi

echo "==> 1/3 Katalog na serwerze"
ssh "$HOST" "mkdir -p '$DIR'"

echo "==> 2/3 Wysyłka plików"
# --delete: usunięte u Ciebie pliki znikają też na serwerze (nie ma tam sekretów ani danych).
rsync -az --delete \
  --exclude='.git' --exclude='node_modules' --exclude='dist' \
  --exclude='nowe' --exclude='files' --exclude='.DS_Store' --exclude='*.log' \
  ./ "$HOST:$DIR/"

echo "==> 3/3 Build i start kontenera (sudo zapyta o hasło raz)"
ssh -t "$HOST" "
  set -e
  cd '$DIR'
  sudo docker compose up -d --build
  echo -n 'Czekam na healthcheck'
  for i in \$(seq 1 30); do
    s=\$(sudo docker inspect -f '{{.State.Health.Status}}' '$CONTAINER' 2>/dev/null || true)
    [ \"\$s\" = healthy ] && break
    echo -n .; sleep 2
  done
  echo
  echo \"Status: \$s\"
  curl -fsS -o /dev/null -w 'HTTP %{http_code} na 127.0.0.1:$PORT\n' 'http://127.0.0.1:$PORT/'
  # Stare, nieotagowane obrazy po poprzednich buildach – dysk systemowy jest ciasny.
  sudo docker image prune -f >/dev/null
  [ \"\$s\" = healthy ]
"

echo "==> Gotowe: https://dominikagluszkowska.com"
