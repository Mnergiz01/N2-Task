<template>
  <div @click="goToAlbumDetails"
    class="p-7 border rounded-xl flex flex-col gap-5 shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
    
    <div class="grid grid-cols-2 gap-4">
      <div v-for="(photo) in photos.slice(0, 4)" :key="photo.id" class="animate-fade-in">
        <img class="h-auto max-w-full rounded-lg" :src="photo.thumbnailUrl" :alt="photo.title" />
      </div>
    </div>

    
    <div>
      <p class="text-gray-700 text-sm leading-relaxed">
        {{ album.title }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  album: Object,
  photos: Array 
})

const goToAlbumDetails = () => {
  
  router.push({
    name: 'AlbumDetails',
    params: { id: props.album.id } 
  })
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
}z

.animate-fade-in {
  animation: fade-in 0.4s ease-in;
}
</style>
