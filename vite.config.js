import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default defineConfig({
  publicPath: 'http://18.233.12.172/barbearia/',
  base: 'http://18.233.12.172/barbearia/',
  plugins: [vue()],


})
