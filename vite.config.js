import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/images': {
        target: 'https://image-backend-zvjc.onrender.com',
        changeOrigin: true,
        pathRewrite: { '^/images': '' },
      },
      '/uploads': {
        target: 'https://image-backend-zvjc.onrender.com',
        changeOrigin: true,
        pathRewrite: { '^/uploads': '' },
      },
    },
     cors: {
      origin: ['https://your-render-com-app-url.com'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
  },
})
