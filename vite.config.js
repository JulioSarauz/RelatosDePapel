import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Alias para facilitar las rutas, puedes poner un alias para 'src'
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
