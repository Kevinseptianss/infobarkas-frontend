import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: 'localhost', // Change this to 'localhost'
    port: 3000, // You can change the port if needed
  },
  plugins: [react()],
})
