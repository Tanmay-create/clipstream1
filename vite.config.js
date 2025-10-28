import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/clipstream1/', // 👈 your GitHub repo name goes here
})
