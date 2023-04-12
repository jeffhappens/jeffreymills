import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/work',
    name: 'work',
    component: () => import(/* webpackChunkName: "about" */ '../views/WorkView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },

  {
    path: '/resume/download',
    name: 'resume-download',
    component: () => import(/* webpackChunkName: "about" */ '../views/DownloadView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach( (to, from, next) => {

  store.dispatch('SET_MOBILE_MENU', false)
  next()

})
export default router
