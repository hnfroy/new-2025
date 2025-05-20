// import react from 'react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import viteCompression from 'vite-plugin-compression'
// import react from 'react'

export default defineConfig({
  plugins: [
    // react(),
    // compression(),
    tailwindcss(),
    viteCompression({
      algorithm: 'gzip', // juga bisa: 'gzip'
      ext: '.br',
      threshold: 1024, // min file size to compress (1kb)
    }),
  ],
  build: {
    minify: 'esbuild', // defaultnya esbuild, tapi pastikan terset
    sourcemap: false,
    // rollupOptions: {
    //   output: {
    //     manualChunks: {
    //       react: ['react', 'react-dom'],
    //       gsap: ['gsap'],
    //     },
    //   },
    // },
  },
})
// function compression(): import("vite").PluginOption {
//   throw new Error('Function not implemented.')
// }

