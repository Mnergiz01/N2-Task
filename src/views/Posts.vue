<template>
    <div class="flex flex-col">
      <goHome />
      <div class="flex flex-wrap justify-center my-20 mx-5 gap-6">
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
  import PostsCard from '@/components/Postcomponents/PostsCard.vue'
  
  const route = useRoute()
  const userId = route.params.id
  const posts = ref([])
  
  onMounted(async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      posts.value = response.data
    } catch (error) {
      console.error('Post verileri alınamadı:', error)
    }
  })
  </script>
  