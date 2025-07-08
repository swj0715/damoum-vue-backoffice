import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/main' },
    {
      path: '/',
      children: [
        {
          path: 'main',
          component: () => import('@/pages/main/ui/MainPage.vue')
        }
      ]
    }
  ]
})

export default router
