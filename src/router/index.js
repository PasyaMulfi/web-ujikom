import { createWebHistory, createRouter } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import BerandaView from '../views/BerandaView.vue'
// import KelolaKontenView from '../views/KelolaKontenView.vue'
import KelolaTentangkamiView from '../views/KelolaTentangkamiView.vue'
import KelolaEventView from '../views/KelolaEventView.vue'
import KelolaBlogView from '../views/KelolaBlogView.vue'
import KelolaKontakView from '../views/KelolaKontakView.vue'
import BlogView from '../views/BlogView.vue'
import Kontakview from '../views/KontakView.vue'
import Eventview from '../views/EventView.vue'
import Tentangkamiview from '../views/TentangkamiView.vue'

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
    // {
    //   path: '/Kelolakonten',
    //   name: 'kelolakonten',
    //   component: KelolaKontenView
    // },
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
    {
      path: '/Kelolablog',
      name: 'kelolaBlog',
      component: KelolaBlogView
    },
    {
      path: '/Kelolakontak',
      name: 'kelolaKontak',
      component: KelolaKontakView
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogView
    },
    {
      path: '/kontak',
      name: 'Kontak',
      component: Kontakview
    },
    {
      path: '/event',
      name: 'Event',
      component: Eventview
    },
    {
      path: '/tentangkami',
      name: 'Tentangkami',
      component: Tentangkamiview
    },
  ]
})

export default router
