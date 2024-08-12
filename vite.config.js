import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure root is set correctly
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // Ensure input points to index.html
    },
  },
});
