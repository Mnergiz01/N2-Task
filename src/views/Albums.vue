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
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import AlbumCard from '@/components/Albumcomponents/AlbumCard.vue'
import goHome from '@/components/goHome.vue'

const albums = ref([])
const albumPhotos = ref({})
const router = useRouter()

onMounted(async () => {
    try {

        const albumsRes = await axios.get('https://jsonplaceholder.typicode.com/albums')
        albums.value = albumsRes.data


        try {
            const photosRes = await axios.get('https://jsonplaceholder.typicode.com/photos')
            const allPhotos = photosRes.data

            const grouped = {}
            allPhotos.forEach(photo => {
                if (!grouped[photo.albumId]) {
                    grouped[photo.albumId] = []
                }
                if (grouped[photo.albumId].length < 4) {
                    grouped[photo.albumId].push(photo)
                }
            })

            albumPhotos.value = grouped
        } catch (error) {
            console.warn('Fotoğraflar alınamadı, ancak uygulama devam ediyor.', error)
            // Fotoğraflar alınamadığında, boş bir değer ile devam edebiliriz
            albumPhotos.value = {}
        }

    } catch (error) {
        console.error('Albüm verileri alınamadı:', error)
    }
})

const goToAlbumDetails = (album) => {
    router.push({ name: 'AlbumDetails', params: { id: album.id } })
}
</script>