# --- Etap 1: build strony (Vite) ---
FROM node:22-alpine AS build
WORKDIR /app

# Lockfile jest opcjonalny: gdy jest – instalacja 1:1 (npm ci), gdy go nie ma – npm install.
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci --no-audit --no-fund; else npm install --no-audit --no-fund; fi

COPY . .
RUN npm run build

# --- Etap 2: serwowanie statycznych plików ---
# nginx bez roota, nasłuchuje na 8080.
FROM nginxinc/nginx-unprivileged:stable-alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY deploy/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
