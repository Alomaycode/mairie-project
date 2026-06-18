import { createApp } from 'vue'
import './assets/css/style.css'
import './assets/css/navbar.css'
import './assets/css/hero.css'
import './assets/css/equipement.css'
import './assets/css/footer.css'
import './assets/css/usercard.css'
import router from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
