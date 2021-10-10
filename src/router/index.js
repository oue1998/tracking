import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../components/SC/project.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../components/SC/detail.vue')
  },
  {
    path: '/budget',
    name: 'budget',
    component: () => import('../components/SC/budget.vue')
  }
  ,
  {
    path: '/used',
    name: 'used',
    component: () => import('../components/SC/used.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
