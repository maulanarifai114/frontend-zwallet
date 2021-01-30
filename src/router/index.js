import Vue from 'vue'
import VueRouter from 'vue-router'

// Landing Page
import Landing from '../views/landing/Landing.vue'
// Auth
import Auth from './auth'
// Main
import Main from './main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  Auth,
  Main
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next({
        path: '/auth/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (localStorage.getItem('token')) {
      next({
        path: '/main/dashboard'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
