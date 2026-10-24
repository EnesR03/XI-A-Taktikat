import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    {
      name: 'index-html-output',
      writeBundle({ dir = resolve(process.cwd(), 'dist') }) {
        copyFileSync(
          resolve(dir, 'Taktikat XI-A.html'),
          resolve(dir, 'index.html'),
        );
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(process.cwd(), 'Taktikat XI-A.html'),
      },
    },
  },
});
