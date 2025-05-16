import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './src/Checkout.jsx',
      },
      external: ['@shopify/checkout-ui-extensions', '@shopify/checkout-ui-extensions-react'],
    },
  },
  resolve: {
    mainFields: ['module', 'jsnext:main', 'jsnext', 'browser', 'main'],
  },
}); 
