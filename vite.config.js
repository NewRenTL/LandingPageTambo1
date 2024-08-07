import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import path from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:
    {
      '@assets':path.resolve(__dirname,'./src/assets'),
      '@components':path.resolve(__dirname,"./src/components"),
      '@layouts':path.resolve(__dirname,"./src/layouts"),
      '@src':path.resolve(__dirname,"./src")
    }
  }
})
