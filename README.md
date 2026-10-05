https://dominikagluszkowska.com

Wdrożenie: serwer domowy przez Cloudflare Tunnel — patrz `deploy/DEPLOY.md`.

## Stack
- Next.js 16 (App Router, statyczny eksport), React 19, Tailwind CSS 4, Framer Motion
- PL/EN pod `/pl/…` i `/en/…`, teksty w `src/i18n/dictionary.ts`
- Zdjęcia i flagi AI w `src/data/photos.ts` (`src/assets/images/ai/` i `nieai/`)

## Praca lokalna
```bash
npm install
npm run dev     # http://localhost:3000/pl
npm run build   # statyczny eksport do out/ + kompresja zdjęć
npm run lint
```

# Dominika gluszkowska - Portfolio website
# Version 2.0.0
