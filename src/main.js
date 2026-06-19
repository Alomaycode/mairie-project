import { createApp } from 'vue'
import './assets/css/style.css'
import './assets/css/navbar.css'
import './assets/css/hero.css'
import './assets/css/equipement.css'
import './assets/css/footer.css'
import './assets/css/usercard.css'
import router from './router'
import App from './App.vue'
import {createPinia} from 'pinia'
import { useProfilStore } from './stores/profilStore.js'
import { useUserStore } from './stores/userStore.js'
import { useEquipementStore } from './stores/equipementStore.js'
import { useUtilisateurProfilStore } from './stores/utilisateurProfilStore.js'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

const profilStore = useProfilStore()
profilStore.initialiserProfils()

const userStore = useUserStore()
userStore.initialiserUsers()

const equipementStore = useEquipementStore()
equipementStore.initialiserEquipements()

const utilisateurProfilStore = useUtilisateurProfilStore()
utilisateurProfilStore.initialiserUtilisateurProfils()

app.mount('#app')
