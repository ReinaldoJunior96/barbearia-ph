import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './style.css'
import vue3GoogleLogin from 'vue3-google-login'
import {createPinia} from 'pinia'

const pinia = createPinia();



const CLIENT_ID = '582435587488-ji2ljicgk3ul1hrkepa2n1aineile3mr.apps.googleusercontent.com'





createApp(App)
  .use(router)
  .use(pinia)
  .use(vue3GoogleLogin,
    { clientId: CLIENT_ID})
  .mount('#app')
