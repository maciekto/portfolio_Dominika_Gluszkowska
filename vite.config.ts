import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    ViteImageOptimizer({
      // Tylko JPG/PNG – SVG (favicon, znaczek AI) zostają bez zmian, bez dodatkowej paczki svgo
      test: /\.(jpe?g|png)$/i,
      jpg: { quality: 80 },
      png: { quality: 80 },
    }),
  ],
})
