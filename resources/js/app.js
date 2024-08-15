import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routes.js';
import App from '@/layouts/App.vue';
import '../css/app.css';
import axios from 'axios';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Content-Type'] = 'application/json';
window.axios.defaults.headers.common['Accept'] = 'application/json';
window.axios.defaults.withCredentials = true;
window.axios.defaults.withXSRFToken = true;

const pinia = createPinia()
const app = createApp(App).use(pinia)


app.use(router).mount('#app');
