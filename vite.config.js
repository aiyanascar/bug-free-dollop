import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/bug-free-dollop/',  
  plugins: [react()],
});

