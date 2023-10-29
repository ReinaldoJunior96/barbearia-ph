import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: '/barbeariasdasdaa',
  plugins: [vue()],
  // vite.config.js
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://54.208.52.199:3000', // Endereço do servidor back-end
  //       changeOrigin: true,
  //     },
  //   },
  // },

})
