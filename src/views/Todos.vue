<template>
    <div class="min-h-screen bg-gray-50">
        <goHome />
      <div class="my-10 mx-auto max-w-3xl px-4">
        <ul class="flex flex-col gap-6">
          <li
            v-for="i in 20"
            :key="i"
            class="bg-white rounded-lg shadow p-4 hover:shadow-md transition-all duration-200"
          >
            <div class="flex items-start gap-4">
              <input
                type="checkbox"
                class="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <p class="text-gray-800 text-sm leading-relaxed">
                Curabitur tempor quis eros tempus lacinia.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import goHome from '@/components/goHome.vue'
  </script>
  