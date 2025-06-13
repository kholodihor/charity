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

// Navigation guard to reset body scroll styles when navigating between views
router.beforeEach((to, from, next) => {
  // Reset body styles to enable scrolling
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.width = ''
  document.body.style.overflow = ''
  
  // If there was a saved scroll position, restore it
  const savedPosition = parseInt(document.body.style.top || '0', 10) * -1
  if (savedPosition) {
    window.scrollTo(0, savedPosition)
  }
  
  next()
})

export default router
