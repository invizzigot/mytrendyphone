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
     host: '0.0.0.0',
  port: 80,
  cors: true,
     cors: true,
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
      origin: ['https://image-backend-zvjc.onrender.com'],
      methods: ['GET'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
  },
})
