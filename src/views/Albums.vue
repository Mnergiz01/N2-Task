<template>
    <div>
      <goHome></goHome>
      <div class="grid grid-cols-3 gap-5">
        <AlbumCard
          v-for="album in albums"
          :key="album.id"
          :album="album"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import AlbumCard from '@/components/AlbumCard.vue'
  import goHome from '@/components/goHome.vue'
  
  const albums = ref([])
  
  onMounted(async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
      albums.value = response.data
    } catch (error) {
      console.error('Albüm verileri alınamadı:', error)
    }
  })
  </script>
  