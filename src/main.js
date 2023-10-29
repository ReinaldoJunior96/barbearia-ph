import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);

const pinia = createPinia();
app.use(router);
app.use(pinia);

app.config.devtools = true; // Ativar ferramentas de desenvolvedor
app.config.debug = true; // Ativar modo de depuração
app.config.warnHandler = (msg, vm, trace) => {
  // Lidar com avisos
  console.warn(`Aviso: ${msg}`);
};
console.log('montei o app')
app.mount('#app');
