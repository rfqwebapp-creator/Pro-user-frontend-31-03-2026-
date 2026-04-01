import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
 
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://13.201.63.42:5001',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})