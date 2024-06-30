import "bootstrap/scss/bootstrap.scss";
import './assets/styles/main.scss'

import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';
import { options } from './i18n'

const app = createApp(App)
const pinia = createPinia()
const i18n = createI18n(options)
app.use(router);
app.use(pinia);
app.use(i18n);
app.mount('#app')
