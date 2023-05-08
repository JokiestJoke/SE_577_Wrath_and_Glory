import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/aboutGilead',
      name: 'AboutGilead',
      component: () => import('../pages/AboutGilead.vue')
    },
    {
      path: '/characterCreation',
      name: 'characterCreation',
      component: () => import('../pages/CharacterCreation.vue')
    }
  ]
})

export default router