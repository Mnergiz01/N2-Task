<template>
  <div class="min-h-screen bg-gray-50">
    <goHome />
    <div class="my-10 mx-auto max-w-3xl px-4">
      <ul class="flex flex-col gap-6">
        <li
          v-for="todo in todos"
          :key="todo.id"
          class="bg-white rounded-lg shadow p-4 hover:shadow-md transition-all duration-200"
        >
          <div class="flex items-start gap-4">
            <input
              type="checkbox"
              :checked="todo.completed"
              disabled
              class="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <p class="text-gray-800 text-sm leading-relaxed">
              {{ todo.title }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import goHome from '@/components/goHome.vue'

const route = useRoute()
const userId = route.params.id

const todos = ref([])

onMounted(async () => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    todos.value = res.data
  } catch (err) {
    console.error('Todos alınamadı:', err)
  }
})
</script>
