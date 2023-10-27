import { createWebHistory, createRouter } from 'vue-router'
import { decodeCredential } from 'vue3-google-login'
import { useShowMenu } from './store/ShowMenu.js'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('./views/login.vue')
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import('./views/Cadastro.vue')
  },
  {
    path: '/dashboard',
    component: () => import('./views/Dashboard.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('./views/Home.vue'),
      },
      {
        path: '/agendar',
        name: 'agendar-horario',
        meta: { requiresAuth: true },
        component: () => import('./views/Agendar.vue')
      },
      {
        path: '/meus-agendamentos',
        name: 'meus-agendamentos',
        meta: { requiresAuth: true },
        component: () => import('./views/Meus-Agendamentos.vue')
      },
      {
        path: '/servicos',
        name: 'servicos',
        meta: { requiresAuth: true },
        component: () => import('./views/Servicos.vue')
      },
      {
        path: '/checkout',
        name: 'checkout',
        meta: { requiresAuth: true },
        component: () => import('./views/Checkout.vue')
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
})

// router.beforeEach((to, from, next) => {
//
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!isAuthenticated()) {
//       next('/')
//     } else {
//       next()
//     }
//   } else {
//
//     next()
//   }
//
// })

export default router
