import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

<<<<<<< HEAD
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
=======
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
>>>>>>> c08e5caede08d68c0b6e6465edd30e5d6d305a93
