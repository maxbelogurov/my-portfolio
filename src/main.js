import "bootstrap/scss/bootstrap.scss";
import './assets/styles/main.scss'
import "@glidejs/glide/src/assets/sass/glide.core.scss";


import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';
import { options } from './i18n'
import { createYmaps } from 'vue-yandex-maps';

const app = createApp(App)
const pinia = createPinia()
const i18n = createI18n(options)
app.use(router);
app.use(pinia);
app.use(i18n);
app.use(createYmaps({
  apikey: 'ab66c0a3-c4e6-43ad-8edf-710b678892c3',
}));
app.mount('#app')
