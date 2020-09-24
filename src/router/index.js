import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/focus',
    name: 'Focus',
    component: () => import(/* webpackChunkName: "focus" */ '../views/Focus.vue')
  },
  {
    path: '/press',
    name: 'Press',
    component: () => import(/* webpackChunkName: "press" */ '../views/Press.vue')
  }
  // {
  //   path: '/leadership',
  //   name: 'Leadership',
  //   component: () => import(/* webpackChunkName: "leadership" */ '../views/Leadership.vue')
  // },
  // {
  //   path: '/media',
  //   name: 'Media',
  //   component: () => import(/* webpackChunkName: "media" */ '../views/Media.vue')
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
