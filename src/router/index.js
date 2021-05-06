import Home from '../views/Home.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bar/:code',
    name: 'bar',
    component: () => import(/* webpackChunkName: "bar" */ '../views/BarcodePage.vue')
  },
  {
    path: '/qr/:code',
    name: 'qr',
    component: () => import(/* webpackChunkName: "qr" */ '../views/QrPage.vue')
  },
  {
    path: '*',
    name: 'Error',
    component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
