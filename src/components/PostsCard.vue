<template>
  <div class="space-y-5">
    <div class="flex flex-col p-5 py-5 space-y-5 border-b-4" v-for="i in 10" :key="i">
      <div class="flex flex-col">
        <h1 class="text-2xl font-semibold text-gray-900">Post Title</h1>
      </div>
      <div>
        <p class="text-gray-700 text-sm break-words">
          Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response in Kerala with Chief Minister Shri
          Pinarayi Vijayan and Health Minister of Kerala, Ms. Veena George
        </p>
      </div>
      <div class="flex items-center justify-end gap-2 text-blue-600 cursor-pointer hover:text-blue-800">
        <span class="text-sm font-medium">See More</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
          <path fill="currentColor"
            d="M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16m6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8Z" />
          <path fill="none" d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8z" />
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup>



</script>