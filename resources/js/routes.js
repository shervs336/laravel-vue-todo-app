import { createRouter, createWebHistory } from "vue-router"

import NotFound from '@/pages/NotFound.vue'
import Home from '@/pages/Home.vue'

import Base from '@/layouts/Base.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Base,
      meta: { requiresAuth: true },
      children: [
        { path: "/", name: 'Home', component: Home },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFound,
    }
  ],
});

export default router;