import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import CardUserView from '../views/CardUserView.vue'
import EquipementView from '../views/EquipementView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: ConnexionView
  },
  {
    path: '/Equipements',
    name: 'equipements',
    component: EquipementView
  },
  {
    path: '/Utilisateurs',
    name: 'utilisateurs',
    component: CardUserView
  } 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
