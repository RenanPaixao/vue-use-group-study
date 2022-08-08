import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from "unocss/vite";
import presetIcons from '@unocss/preset-icons/browser'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    unocss({ 
      presets: [
        presetIcons({
            cdn: 'https://esm.sh/'
        })
      ]
    })
  ]
})
