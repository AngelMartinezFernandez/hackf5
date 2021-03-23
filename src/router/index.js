import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/new-task',
    name: 'FormTask',
    component: () => import('../views/FormTask.vue')
  },
  {
    path: '/week-task',
    name: 'WeekTask',
    component: () => import('../views/WeekTask.vue')
  },
  {
    path: '/today-task',
    name: 'TodayTask',
    component: () => import('../views/TodayTask.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue')
  },
  {
    path: '/diary',
    name: 'Diary',
    component: () => import('../views/Diary.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
