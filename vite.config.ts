/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy(),
    VitePWA({ 
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg,webp}'],
        runtimeCaching: [{
          urlPattern: ({ url }) => {
            const allowedPathnames = ['/sale-statistics', '/stock-warnings', '/api/products', '/api/order-dets', '/api/orders'];
            return allowedPathnames.some(allowedPathname => url.pathname === allowedPathname)
          },
          handler: "NetworkFirst" as const,
          options: {
            cacheName: "api-cache",
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }]
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})
