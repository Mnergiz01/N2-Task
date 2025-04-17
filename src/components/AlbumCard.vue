<template>
  <div
    @click="goToAlbumDetails"
    class="p-7 border rounded-xl flex flex-col gap-5 shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
  >
    <!-- Grid Görsel Galeri -->
    <div class="grid grid-cols-2 gap-4">
      <div v-for="i in 4" :key="i" class="animate-fade-in">
        <img
          class="h-auto max-w-full rounded-lg"
          :src="getStaticImage(i)"
          alt="Gallery image"
        />
      </div>
    </div>

    <!-- Açıklama Metni -->
    <div>
      <p class="text-gray-700 text-sm leading-relaxed">
        {{ album.title }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const props = defineProps({
  album: Object
})

const photos = ref([])

onMounted(async () => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${props.album.id}/photos`)
    photos.value = response.data
  } catch (error) {
    console.error('Fotoğraflar alınırken hata oluştu:', error)
  }
})

// Static image helper
const getStaticImage = (index) => {
  return `https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${index}.jpg`
}

// Route to album details
const goToAlbumDetails = () => {
  router.push({ name: 'AlbumDetails', params: { id: props.album.id } })
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.4s ease-in;
}
</style>
