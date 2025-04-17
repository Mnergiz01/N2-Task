<template>
  <div class="relative">
    <!-- Posts List -->
    <div :class="['space-y-5 transition duration-300', showModal ? 'blur-sm pointer-events-none' : '']">
      <div class="flex flex-col p-5 py-5 space-y-5 border-b-4" v-for="post in posts" :key="post.id">
        <div class="flex flex-col">
          <h1 class="text-2xl font-semibold text-gray-900">{{ post.title }}</h1>
        </div>
        <div>
          <p class="text-gray-700 text-sm break-words">
            {{ post.body }}
          </p>
        </div>
        <div class="flex items-center justify-end gap-2 text-blue-600 cursor-pointer hover:text-blue-800"
          @click="openModal(post)">
          <span class="text-sm font-medium">See More</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
            <path fill="currentColor"
              d="M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16m6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8Z" />
            <path fill="none" d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Modal with post content -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div class="bg-white rounded-xl p-8 max-w-3xl w-full shadow-lg space-y-6 relative">

        <!-- Title and Description Section -->
        <div class="flex gap-8">
          <!-- Left side - Post description -->
          <div class="w-1/2 overflow-y-auto max-h-96">
            <h2 class="text-2xl font-bold text-gray-900">{{ selectedPost.title }}</h2>
            <p class="text-gray-700 text-sm mt-4">
              {{ selectedPost.body }}
            </p>
          </div>

          <!-- Right side - Comments Section -->
          <div class="w-1/2 overflow-y-auto max-h-96">
            <h3 class="text-xl font-semibold text-gray-900">Comments</h3>
            <div class="space-y-6 mt-4">
              <div v-for="comment in comments" :key="comment.id" class="flex gap-4 border-b pb-4">
                <!-- Avatar and Comment -->
                <img class="w-12 h-12 rounded-full object-cover" :src="'https://i.pravatar.cc/150?img=' + comment.id"
                  alt="Avatar" />
                <div class="flex flex-col w-full">
                  <p class="text-sm text-gray-700"><strong>{{ comment.name }}:</strong> {{ comment.body }}</p>
                  <p class="text-xs text-gray-500 mt-1">By: {{ comment.email }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Close Button -->
        <button class="absolute top-3 right-3 text-gray-400 hover:text-gray-600" @click="closeModal">
          ✖
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const userId = route.params.id
const posts = ref([])

const showModal = ref(false)
const selectedPost = ref({})
const comments = ref([])

// Open modal and load comments
const openModal = async (post) => {
  selectedPost.value = post
  showModal.value = true
  await loadComments(post.id)
}

// Close modal
const closeModal = () => {
  showModal.value = false
}

// Fetch posts
onMounted(async () => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    posts.value = response.data
  } catch (error) {
    console.error('Posts verileri alınamadı:', error)
  }
})

// Fetch comments for a specific post
const loadComments = async (postId) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    comments.value = response.data
  } catch (error) {
    console.error('Yorumlar alınırken hata oluştu:', error)
  }
}
</script>
