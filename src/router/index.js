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
    path: '/todos/:id',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/posts/:id',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/albums/:id',
    name: 'Albums',
    component: Albums
  },
  {
    path: '/album/:id',
    name: 'AlbumDetails',
    component: () => import('@/components/AlbumDetails.vue'),
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
