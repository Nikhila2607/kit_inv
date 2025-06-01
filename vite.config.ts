import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/kit_inv/', // ← this is the key fix
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
