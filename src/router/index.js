import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/authentication/Login.vue'
import Register from '../views/authentication/Register.vue'
import TaskAll from '../views/task/TaskAll.vue'
import TaskCreate from '../views/task/TaskCreate.vue'
import TaskEdit from '../views/task/TaskEdit.vue'
import * as auth from '../services/AuthService'

// const Islogin = false

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/task/new',
    name: 'task-create',
    component: TaskCreate,
    beforeEnter: (toolbar, from, next) => {
      if (auth.IsLogin) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/task/:id',
    name: 'task-edit',
    component: TaskEdit,
    beforeEnter: (toolbar, from, next) => {
      if (auth.Islogin) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/task',
    name: 'task-all',
    component: TaskAll,
    beforeEnter: (toolbar, from, next) => {
      if (auth.Islogin) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (toolbar, from, next) => {
      if (!auth.Islogin) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (toolbar, from, next) => {
      if (!auth.Islogin) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
