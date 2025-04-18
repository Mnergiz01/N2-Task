<template>
  <div class="flex flex-col">
    <goHome />
    <div class="flex flex-wrap justify-center my-20 mx-5 gap-6">
      <PostsCard
        v-for="post in userPosts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useApiStore } from '@/stores/apiStore'
import goHome from '@/components/goHome.vue'
import PostsCard from '@/components/Postcomponents/PostsCard.vue'

const route = useRoute()
const userId = route.params.id

const apiStore = useApiStore()
const userPosts = computed(() => apiStore.userPosts)

onMounted(async () => {
  try {
    await apiStore.fetchPostsByUser(userId)
  } catch (error) {
    console.error('Post verileri alınamadı:', error)
  }
})
</script>
