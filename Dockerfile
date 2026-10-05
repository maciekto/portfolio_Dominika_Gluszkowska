# --- Etap 1: build strony (Next.js, statyczny eksport do out/) ---
FROM node:22-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
# next build + kompresja zdjęć w out/ (scripts/optimize-images.mjs)
RUN npm run build

# --- Etap 2: serwowanie statycznych plików ---
# nginx bez roota, nasłuchuje na 8080.
FROM nginxinc/nginx-unprivileged:stable-alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY deploy/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 8080
