import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/barbearia',
    name: 'login',
    component: () => import('./views/login.vue')
  },
  {
    path: '/barbearia/cadastro',
    name: 'cadastro',
    component: () => import('./views/Cadastro.vue')
  },
  {
    component: () => import('./views/Dashboard.vue'),
    children: [
      {
        path: '/barbearia/home',
        name: 'home',
        component: () => import('./views/Home.vue'),
      },
      {
        path: '/barbearia/agendar',
        name: 'agendar-horario',
        meta: { requiresAuth: true },
        component: () => import('./views/Agendar.vue')
      },
      {
        path: '/barbearia/meus-agendamentos',
        name: 'meus-agendamentos',
        meta: { requiresAuth: true },
        component: () => import('./views/Meus-Agendamentos.vue')
      },
      {
        path: '/barbearia/checkout',
        name: 'checkout',
        meta: { requiresAuth: true },
        component: () => import('./views/Checkout.vue')
      },

    ]
  },
  {
    path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('./views/NotFound.vue')
  },

]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
})

export default router
