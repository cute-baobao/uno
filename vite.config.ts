import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from "unocss/vite"
import path from 'path'
// https://vite.dev/config/
export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd(),"")
  console.log(env.VITE_APP_DEV,env.VITE_APP_BASE_URL)
  return {
    plugins: [vue(),Unocss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})
