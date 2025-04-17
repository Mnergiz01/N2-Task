// src/stores/apiStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useApiStore = defineStore('api', () => {
  // State
  const todos = ref([])
  const users = ref([])
  const posts = ref([])
  const actorDetails = ref(null)
  const news = ref([])

  // Actions
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

  const fetchActorDetails = async (actorId) => {
    const res = await axios.get(`https://api.themoviedb.org/3/person/${actorId}?api_key=YOUR_API_KEY`)
    actorDetails.value = res.data
  }

  const fetchNews = async () => {
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY`)
    news.value = res.data.articles
  }

  // Return everything you want to expose
  return {
    todos,
    users,
    posts,
    actorDetails,
    news,
    fetchTodos,
    fetchUsers,
    fetchPosts,
    fetchActorDetails,
    fetchNews
  }
})
