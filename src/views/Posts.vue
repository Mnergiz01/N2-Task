<template>
    <div class="flex flex-col">
      <div>
        <goHome />
      </div>
      <div class="flex flex-wrap items-center my-20 mx-5">
        <PostsCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import axios from 'axios'
  import goHome from '@/components/goHome.vue'
  import PostsCard from '@/components/PostsCard.vue'
  
  const route = useRoute()
  const userId = route.params.id
  const posts = ref([])
  
  // Veriyi çekerken konsola yazdırma (debugging)
  console.log('User ID:', userId)
  
  onMounted(async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      posts.value = response.data
    } catch (error) {
      console.error('Posts verileri alınamadı:', error)
    }
  })
  </script>
  