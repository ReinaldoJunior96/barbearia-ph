import { createWebHistory, createRouter } from 'vue-router'
import { useLoginGoogleStore } from './store/googleLogin.js'
import { decodeCredential } from 'vue3-google-login'
import { useShowMenu } from './store/ShowMenu.js'
function isAuthenticated () {

  const loginGoogle = useLoginGoogleStore()
  const tokenRecuperado = localStorage.getItem('token')

  if (!tokenRecuperado) {
    window.location.href = '/'
    console.log('Token not found!!')
  }

  let user = decodeCredential(tokenRecuperado)
  let isAutenticaded = Boolean

  if (user) {
    loginGoogle.setName(user.name)
    loginGoogle.setEmail(user.email)
    loginGoogle.setPicture(user.picture)
    isAutenticaded = true
  } else {
    isAutenticaded = false
    console.log('Token not found!!')
    window.location.href = '/'
  }
  return isAutenticaded
}

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
    meta: { requiresAuth: true },
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

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next('/')
    } else {
      next()
    }
  } else {

    next()
  }

})

export default router
