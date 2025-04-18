<template>
    <div>
        <goHome />
        <div class="p-6 space-y-8">
            

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AlbumCard v-for="album in albums" :key="album.id" :album="album" :photos="albumPhotos[album.id] || []"
                    @click="goToAlbumDetails(album)" />
            </div>
        </div>

    </div>

</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useApiStore } from '@/stores/apiStore'
import AlbumCard from '@/components/Albumcomponents/AlbumCard.vue'
import goHome from '@/components/goHome.vue'

const apiStore = useApiStore()
const router = useRouter()

const albums = computed(() => apiStore.albums)
const albumPhotos = computed(() => {
  const grouped = {}
  apiStore.photos.forEach(photo => {
    if (!grouped[photo.albumId]) {
      grouped[photo.albumId] = []
    }
    if (grouped[photo.albumId].length < 4) {
      grouped[photo.albumId].push(photo)
    }
  })
  return grouped
})

onMounted(async () => {
  try {
    await apiStore.fetchAlbums()
  } catch (err) {
    console.error('Albüm verileri alınamadı:', err)
  }

  try {
    await apiStore.fetchPhotos()
  } catch (err) {
    console.warn('Fotoğraflar alınamadı, ancak uygulama devam ediyor.', err)
  }
})

const goToAlbumDetails = (album) => {
  router.push({ name: 'AlbumDetails', params: { id: album.id } })
}
</script>
