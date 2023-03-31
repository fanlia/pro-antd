import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import dynamicImport from 'vite-plugin-dynamic-import'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    dynamicImport(),
  ],
  build: {
    chunkSizeWarningLimit: 2000,
  },
  resolve: {
    alias: {
      config: path.resolve(process.cwd(), `/config/${mode}.js`),
    },
  },
}))
