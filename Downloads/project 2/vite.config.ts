import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'icons': ['lucide-react', 'react-icons']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true
  }
});