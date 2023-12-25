import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/style.css'; // Import Tailwind CSS


import { languages } from "@/i18n";
import { defaultLocale } from "@/i18n";
import { createI18n } from "vue-i18n";



const messages = Object.assign(languages)

const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages
})

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');



