<template>
    <div v-if="user" class="flex gap-2 items-center">
      <img
        class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        :src="`https://i.pravatar.cc/150?u=${user.id}`"
        alt="Avatar"
      />
      <div class="flex flex-col">
        <p class="text-sm font-semibold">{{ user.name }}</p>
        <p class="text-sm text-gray-300">{{ user.email }}</p>
      </div>
    </div>
    <div v-else class="text-white text-sm">Kullanıcı verisi yükleniyor...</div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import axios from 'axios'
  
  const user = ref(null)
  const route = useRoute()
  const userId = route.params.id
  

  const isUsersPage = route.path === '/users'
  

  const fetchUser = async () => {
    try {
      
      if (!isUsersPage && userId) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        user.value = response.data
      } else {
        
        console.log("Kullanıcı verisi sadece detay sayfasında yüklenir.")
      }
    } catch (error) {
      console.error('Kullanıcı verisi alınırken hata oluştu:', error)
    }
  }
  
  onMounted(() => {
    fetchUser()
  })
  </script>
  