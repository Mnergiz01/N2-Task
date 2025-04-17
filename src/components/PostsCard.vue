<template>
  <div class="relative w-full max-w-2xl">
    <div class="space-y-5 transition duration-300 border-b-4 p-5 py-5">
      <h1 class="text-2xl font-semibold text-gray-900">{{ post.title }}</h1>
      <p class="text-gray-700 text-sm break-words">{{ post.body }}</p>

      <div
        class="flex items-center justify-end gap-2 text-blue-600 cursor-pointer hover:text-blue-800"
        @click="openModal"
      >
        <span class="text-sm font-medium">See More</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
          <path fill="currentColor"
            d="M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16m6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8Z" />
        </svg>
      </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div class="bg-white rounded-xl p-8 max-w-3xl w-full shadow-lg space-y-6 relative">
        <div class="flex gap-8">
          <!-- Left: Post Content -->
          <div class="w-1/2 overflow-y-auto max-h-96">
            <h2 class="text-2xl font-bold text-gray-900">{{ post.title }}</h2>
            <p class="text-gray-700 text-sm mt-4">{{ post.body }}</p>
          </div>

          <!-- Right: Comments Section -->
          <div class="w-1/2 overflow-y-auto max-h-96">
            <h3 class="text-xl font-semibold text-gray-900">Comments</h3>
            <div class="space-y-6 mt-4">
              <div v-for="comment in comments" :key="comment.id" class="flex gap-4 border-b pb-4">
                <img
                  class="w-12 h-12 rounded-full object-cover"
                  :src="'https://i.pravatar.cc/150?u=' + comment.email"
                  alt="Avatar"
                />
                <div class="flex flex-col w-full">
                  <p class="text-sm text-gray-700"><strong>{{ comment.name }}:</strong> {{ comment.body }}</p>
                  <p class="text-xs text-gray-500 mt-1">By: {{ comment.email }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Close Modal Button -->
        <button
          class="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          @click="closeModal"
        >
          ✖
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  post: Object
})

const showModal = ref(false)
const comments = ref([])

const openModal = async () => {
  showModal.value = true
  await fetchComments()
}

const closeModal = () => {
  showModal.value = false
  comments.value = []
}

const fetchComments = async () => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${props.post.id}`)
    comments.value = response.data
  } catch (error) {
    console.error('Yorumlar alınamadı:', error)
  }
}
</script>
