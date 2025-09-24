import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync, copyFileSync } from 'node:fs'
import { resolve, join } from 'node:path'

// Build to /docs for GitHub Pages and create 404.html fallback for SPA routing
export default defineConfig({
  base: './', // works when hosted at username.github.io/repo-name
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        const outDir = resolve(__dirname, 'docs')
        const indexPath = join(outDir, 'index.html')
        const notFoundPath = join(outDir, '404.html')
        if (existsSync(indexPath)) {
          try {
            copyFileSync(indexPath, notFoundPath)
          } catch {}
        }
      }
    }
  ],
  build: { outDir: 'docs' },
  resolve: { extensions: ['.js', '.jsx'] }
})