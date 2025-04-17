<template>
  <div
    @click="handleCardClick"
    class="cursor-pointer p-6 border rounded-2xl shadow-md bg-white flex flex-col gap-6 w-full max-w-md transition-transform duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
    
    <!-- Üst Bilgiler -->
    <div class="flex items-center gap-4">
      <img class="w-20 h-20 rounded-full object-cover" :src="`https://i.pravatar.cc/150?img=${user.id}`" alt="Avatar" />
      <div>
        <h1 class="text-lg font-semibold text-gray-800">{{ user.name }}</h1>
        <p class="text-sm text-gray-500">{{ user.email }}</p>
        <p class="text-sm text-gray-500">{{ user.phone }}</p>
      </div>
    </div>

    <!-- Diğer Bilgiler -->
    <div class="flex flex-col gap-4 text-sm text-gray-700">

      <!-- Location -->
      <div v-if="user.address">
        <div class="flex items-center gap-2 font-medium text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="none" stroke="#000" stroke-width="1">
              <path d="M8 14.5C10.5 11 12.5 8 12.5 6a4.5 4.5 0 1 0-9 0c0 2 2 5 4.5 8.5Z" />
              <path d="M10 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
            </g>
          </svg>
          <span>Location</span>
        </div>
        <p class="ms-6">{{ user.address.street }}, {{ user.address.suite }}</p>
        <p class="ms-6">{{ user.address.city }} / {{ user.address.zipcode }}</p>
      </div>

      <!-- Company -->
      <div v-if="user.company">
        <div class="flex items-center gap-2 font-medium text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="#000"
              d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z" />
          </svg>
          <span>Company</span>
        </div>
        <p class="ms-6">{{ user.company.name }}</p>
        <p class="ms-6 text-gray-500 italic">"{{ user.company.catchPhrase }}"</p>
      </div>

      <!-- Website -->
      <div>
        <div class="flex items-center gap-2 font-medium text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2048 2048">
            <path fill="#000"
              d="M1024 0q141 0 272 36t245 103t207 160t160 208t103 245t37 272q0 141-36 272t-103 245t-160 207t-208 160t-245 103t-272 37q-141 0-272-36t-245-103t-207-160t-160-208t-103-244t-37-273q0-141 36-272t103-245t160-207t208-160T751 37t273-37m0 1920q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32q-123 0-237 32t-214 90t-182 141t-140 181t-91 214t-32 238q0 123 32 237t90 214t141 182t181 140t214 91t238 32m597-880l48-144h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74zm-464-144h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144zm-512 0h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144z" />
          </svg>
          <span>Website</span>
        </div>
        <a :href="`https://${user.website}`" target="_blank" class="ms-6 text-blue-600 hover:underline">
          {{ user.website }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'

const props = defineProps({
  user: Object
})

const router = useRouter()

const handleCardClick = async () => {
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${props.user.id}`)
    console.log('Kullanıcı detayları:', data)

    // Detay sayfasına yönlendir
    router.push(`/todos/${props.user.id}`)
  } catch (error) {
    console.error('Kullanıcı verisi alınamadı:', error)
  }
}
</script>
