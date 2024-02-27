import { createWebHistory, createRouter } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import BerandaView from '../views/BerandaView.vue'
import KelolaKontenView from '../views/KelolaKontenView.vue'
import KelolaTentangkamiView from '../views/KelolaTentangkamiView.vue'
import KelolaEventView from '../views/KelolaEventView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Beranda',
      component: BerandaView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/Kelolakonten',
      name: 'kelolakonten',
      component: KelolaKontenView
    },
    {
      path: '/Kelolatentangkami',
      name: 'kelolatentang',
      component: KelolaTentangkamiView
    },
    {
      path: '/Kelolaevent',
      name: 'kelolaEvent',
      component: KelolaEventView
    },
  ]
})

export default router
