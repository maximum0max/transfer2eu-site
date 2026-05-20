import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// transfer2eu-site — static marketing site, React + Vite.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8765,
    open: true,
  },
  esbuild: {
    // Strip console.* and debugger from production bundles (saves a few KB
    // and stops dev logs leaking into the live site).
    drop: ['console', 'debugger'],
  },
  build: {
    target: 'es2019',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        // Split React out of the app chunk so it can cache independently
        // across deploys (only changes when React itself updates).
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
})
