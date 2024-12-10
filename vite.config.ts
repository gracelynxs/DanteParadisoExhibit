import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'DanteParadisoExhibit',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input:{
        main: 'src/App.tsx',
        scene: 'src/Scene.tsx'
      },      
      external: ['react-router-dom']
    }
  }

})