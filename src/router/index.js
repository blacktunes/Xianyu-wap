import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/Vue',
    name: 'Vue',
    component: Home
  }, {
    path: '/Node',
    name: 'Node',
    component: Home
  }, {
    path: '/Other',
    name: 'Other',
    component: Home
  }, {
    path: '/Mood',
    name: 'Mood',
    component: Home
  }, {
    path: '/Timeline',
    name: 'Timeline',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
