import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { fileURLToPath } from 'url';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react(), NodeGlobalsPolyfillPlugin()],
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: { modules: { localsConvention: 'camelCaseOnly' } },
});
