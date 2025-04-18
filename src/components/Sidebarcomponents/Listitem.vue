<template>
  <div>
    <ul class="space-y-5 font-medium text-white">
     
      <template v-if="route.path === '/users'">
        <li v-for="item in Menuitem1" :key="item" class="cursor-pointer flex items-center p-3 rounded-lg transition"
          :class="{
            'bg-white text-gray-900 shadow font-semibold': isActive(item),
            'hover:bg-gray-700 text-white': !isActive(item)
          }" @click="handleMenuitem(item)">
          <svg class="w-5 h-5 me-3" :class="{ 'text-gray-800': isActive(item) }" fill="currentColor"
            viewBox="0 0 20 18">
            <path
              d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>
          <span>{{ item }}</span>
        </li>
      </template>

      
      <template v-else>
        <Auther :userId="userId" />
        <li v-for="item in Menuitem2" :key="item" class="cursor-pointer flex items-center p-3 rounded-lg transition"
          :class="{
            'bg-white text-gray-900 shadow font-semibold': isActive(item),
            'hover:bg-gray-700 text-white': !isActive(item)
          }" @click="handleMenuitem2(item)">
          <svg class="w-5 h-5 me-3" :class="{ 'text-gray-800': isActive(item) }" fill="currentColor"
            viewBox="0 0 20 18">
            <path
              d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>
          <span>{{ item }}</span>
        </li>
      </template>
    </ul>
  </div>
</template>


<script setup>
import { ref,onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import Auther from '@/components/Authercomponents/Auther.vue'


const Menuitem1 = ref(['Users'])
const Menuitem2 = ref(['Todos', 'Posts', 'Albums'])


const router = useRouter()
const route = useRoute()

const userId = route.params.id


const handleMenuitem = (item) => {
  router.push(`/${item.toLowerCase()}`)
}


const handleMenuitem2 = (item) => {
  const endpoint = item.toLowerCase()
  const userId = route.params.id

  
  router.push(`/${endpoint}/${userId}`)
}




const isActive = (item) => {
  const pathSegments = route.path.toLowerCase().split('/')
  const itemName = item.toLowerCase()
  return pathSegments.includes(itemName)
}

</script>
