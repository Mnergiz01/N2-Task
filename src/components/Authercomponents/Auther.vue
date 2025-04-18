<template>
  <div v-if="user" class="flex gap-2 items-center pb-5 mb-5 mt-2 border-b border-gray-400">
    <img
      class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-600"
      :src="`https://i.pravatar.cc/150?u=${user.id}`"
      alt="Avatar"
    />
    <div class="flex flex-col">
      <p class="text-sm font-poppins text-black">{{ user.name }}</p>
      <a :href="`mailto:${user.email}`" class="text-sm text-gray-400 hover:scale-105 transition-all duration-300">
        {{ user.email }}
      </a>
    </div>
  </div>
  <div v-else class="text-white text-sm">Kullanıcı verisi yükleniyor...</div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const user = ref(null)
const route = useRoute()

const fetchUser = async () => {
  try {
    const userId = route.params.id
    if (userId) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      user.value = response.data
    }
  } catch (error) {
    console.error('Hata:', error)
  }
}

onMounted(fetchUser)
watch(() => route.params.id, fetchUser)
</script>
