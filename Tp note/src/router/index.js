import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/cards',
      name: 'Cards',
      component: () => import('../views/Card.vue')
    },

    {
      path: '/sets',
      name: 'Sets',
      component: () => import('../views/Set.vue')
    },

    {
      path: '/set/:id',
      name: 'Set',
      component: () => import('../views/SetItem.vue')
    },

    {
      path: '/card/:id',
      name: 'Card',
      component: () => import('../views/CardItem.vue')
    },
  ]
})

export default router
