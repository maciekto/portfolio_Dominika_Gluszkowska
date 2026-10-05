import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Statyczny eksport: każda podstrona (PL/EN) to gotowy plik HTML w out/, serwowany przez nginx
  output: 'export',
  // Optymalizator obrazów Next wymaga serwera – zdjęcia kompresujemy po buildzie (scripts/optimize-images.mjs)
  images: { unoptimized: true },
  trailingSlash: false,
  reactStrictMode: true,
}

export default nextConfig
