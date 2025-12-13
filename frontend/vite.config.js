import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Must match the /api path used in your frontend
      '/api': {
        target: 'http://localhost:5040', // Must match your backend's port
        changeOrigin: true,
        secure: false, 
      },
    },
  },
})
