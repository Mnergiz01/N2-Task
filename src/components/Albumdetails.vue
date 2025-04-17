<template>
    <div>
        <goHome></goHome>
        <div class="p-10">
            <h1 class="text-2xl font-bold mb-6 text-gray-800">Album #{{ albumId }} Fotoğrafları</h1>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="photo in photos" :key="photo.id">
                    <img :src="photo.url" :alt="photo.title" class="w-full h-48 object-cover rounded-lg shadow" />
                    <p class="text-xs mt-2 text-gray-600 truncate">{{ photo.title }}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import goHome from '@/components/goHome.vue'

const route = useRoute()
const albumId = route.params.id

const photos = ref([])

onMounted(async () => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        photos.value = response.data
    } catch (error) {
        console.error('Fotoğraflar alınamadı:', error)
    }
})
</script>