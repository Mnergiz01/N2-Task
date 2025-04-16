import { createRouter, createWebHistory } from 'vue-router'

// Sayfa bileşenlerini import et
import Users from '@/views/Users.vue'
import Todos from '@/views/Todos.vue'
import Posts from '@/views/Posts.vue'
import Albums from '@/views/Albums.vue'

const routes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/albums',
    name: 'Albums',
    component: Albums
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
