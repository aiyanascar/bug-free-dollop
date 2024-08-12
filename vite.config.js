import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/bug-free-dollop/', // Adjust base path for GitHub Pages
});
