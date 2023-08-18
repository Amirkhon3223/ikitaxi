import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/style.css'; // Import Tailwind CSS


createApp(App).use(router).mount('#app')
