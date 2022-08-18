import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BasketView from '@/views/BasketView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/:category',
    component: HomeView
  },
  {
    path: '/basket',
    component: BasketView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
