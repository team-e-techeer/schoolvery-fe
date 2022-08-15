/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite';
import fs from 'fs';
import path from 'path';
// eslint-disable-next-line import/extensions
import { dependencies } from './package.json';
import dynamicImport from 'vite-plugin-dynamic-import';
import { ViteFaviconsPlugin } from 'vite-plugin-favicon';
import { VitePluginFonts } from 'vite-plugin-fonts';
function renderChunks(deps: Record<string, string>) {
  const chunks = {};
  Object.keys(deps).forEach(key => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    ViteFaviconsPlugin({
      logo: 'public/assets/logo.png',
      favicons: {
        path: 'assets/',
      },
    }),
    VitePluginFonts({
      custom: {
        families: [
          {
            name: 'Nanum',
            local: 'Nanum',
            src: './src/assets/fonts/Nanum.ttf',
          },
          {
            name: 'Jalnan',
            local: 'Jslnan',
            src: './src/assets/fonts/Jslnan.ttf',
          },
        ],
        display: 'auto',
        preload: true,
        prefetch: false,
        injectTo: 'head-prepend',
      },
    }),
    splitVendorChunkPlugin(),
    dynamicImport({
      onFiles: files => files.filter(f => !f.includes('main-output.js')),
    }),
    {
      name: 'vite-plugin-dynamic-import:test',
      transform(code, id) {
        if (/src\/main\.ts$/.test(id)) {
          // Write transformed code to main-output.js
          fs.writeFileSync(path.join(path.dirname(id), 'main-output.js'), code);
        }
      },
    },
  ],
  base: '/',
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          lodash: ['lodash'],
          '@emotion/react': ['@emotion/react'],
          '@emotion/styled': ['@emotion/styled'],
          util: ['util'],
          ...renderChunks(dependencies),
        },
      },
    },
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
});
