import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    viteCompression(),
  ],
  build: {
    minify: 'esbuild',
  }
})

function viteCompression(): import("vite").PluginOption {
  throw new Error('Function not implemented.')
}

