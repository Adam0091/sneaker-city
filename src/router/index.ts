import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BasketView from '@/views/BasketView.vue'
import { BASKET_PATH, HOME_CATEGORY_PATH, HOME_PATH } from '@/constants/routes'

const routes: Array<RouteRecordRaw> = [
  {
    path: HOME_PATH,
    component: HomeView
  },
  {
    path: HOME_CATEGORY_PATH,
    component: HomeView
  },
  {
    path: BASKET_PATH,
    component: BasketView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
