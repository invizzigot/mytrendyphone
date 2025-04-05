import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    env: {
    PROXY_URL: 'https://image-backend-zvjc.onrender.com/images',
  },
  plugins: [
    vue(),
  ],
    build: {
  outDir: 'dist',
  sourcemap: true,
},
resolve: {
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
  },
  extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
},
  server: {
     host: '0.0.0.0',
  port: 1000,
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
    // cors: {
    //   origin: ['https://image-backend-zvjc.onrender.com'],
    //   methods: ['GET'],
    //   allowedHeaders: ['Content-Type', 'Authorization'],
    // },
  },
})
