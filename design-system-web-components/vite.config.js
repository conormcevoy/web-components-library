import { defineConfig } from 'vite';
import dts from "vite-plugin-dts";
// import react from '@vitejs/plugin-react';
import treeShakeable from 'rollup-plugin-tree-shakeable'


export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true
    }),
    // react()
    treeShakeable()
  ],
  build: {
    emptyOutDir: false,
    outDir: 'dist',
    minify: false,
    rollupOptions: {
      external: [/^lit/],
      preserveEntrySignatures: 'allow-extension',
      input: {
        "my-element": 'src/my-element.ts', // Path to my-panel module
        "my-panel": 'src/my-panel.ts', // Path to my-panel module
        "my-panel-react": 'src/my-panel-react.ts', // Path to my-panel module
      },
      output: {  
        entryFileNames: `[name].js`,
        // Configure chunk filenames without hash, if you have any
        chunkFileNames: `[name].js`,
      }
  }
 },
});