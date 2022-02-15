import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: () => (window.matchMedia("(max-width: 600px)").matches == true ? import('../views/Home-mobile.vue') : console.log('') )
    component: () => (window.matchMedia("(max-width: 600px)").matches == true ? import('../views/Home-mobile.vue') : window.matchMedia("(max-width: 1264px)").matches == true ? import('../views/Home-tablet.vue') : window.matchMedia("(max-width: 9999px)").matches == true ? import('../views/Home-pc.vue') : console.log('Pantalla no compatible'))
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
  path: '/logout',
  name: 'logout',
  component: Logout
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => (window.matchMedia("(max-width: 600px)").matches == true ? import('../views/About.vue') : console.log('') )
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
