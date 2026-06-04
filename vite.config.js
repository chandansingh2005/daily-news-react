import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tailwindcss()],
    // If we are building for production (GitHub Pages), use the repo name, otherwise use root '/'
    base: mode === 'production' ? '/daily-news-react/' : '/',
  }
})