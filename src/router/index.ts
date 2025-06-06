import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NewsView from '@/views/NewsView.vue'
import MapView from '@/views/MapView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/branches',
      name: 'branches',
      component: MapView,
    },
  ],
})

export default router
