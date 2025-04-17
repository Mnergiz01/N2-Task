// src/stores/apiStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useApiStore = defineStore('api', () => {
  
  const todos = ref([])
  const users = ref([])
  const posts = ref([])
  const albums = ref([])  
  const photos = ref([])  
  const userDetail = ref(null)

 
  const fetchTodos = async (userId) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    todos.value = res.data
  }

  const fetchUsers = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    users.value = res.data
  }

  const fetchPosts = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    posts.value = res.data
  }

  const fetchAlbums = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/albums')
    albums.value = res.data
  }

  const fetchPhotos = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
    photos.value = res.data
  }

  const fetchUserDetail = async (userId) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    userDetail.value = res.data
  }

  return {
    albums,
    photos,
    fetchTodos,
    fetchUsers,
    fetchPosts,
    fetchAlbums,
    fetchPhotos,
    fetchUserDetail
  }
})
