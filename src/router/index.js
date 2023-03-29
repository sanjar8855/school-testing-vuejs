import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from '../views/ViewHome.vue'
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: ViewHome,
    meta: {
      layout: 'main',
      auth: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/ViewAbout.vue'),
    meta: {
      layout: 'main',
      auth: false
    }
  },
  {
    path: '/student',
    name: 'ViewStudent',
    component: () => import('../views/ViewStudent.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/ViewAuth.vue'),
    meta: {
      layout: 'auth',
      auth: false
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/ViewDashboard.vue'),
    meta: {
      layout: 'dashboard',
      auth: true
    }
  },
  {
    path: '/studentadd',
    name: 'ViewStudentAdd',
    component: () => import('../views/ViewStudentAdd.vue'),
    meta: {
      layout: 'dashboard',
      auth: true
    }
  },
  {
    path: '/studentupdate/:id',
    name: 'ViewStudentUpdate',
    component: () => import('../views/ViewStudentUpdate.vue'),
    meta: {
      layout: 'dashboard',
      auth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth
  if (requireAuth && store.getters['auth/isAuthenticated']) {
    next()
  }
  else if (requireAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth?message=auth')
  }
  else {
    next()
  }
})

export default router
