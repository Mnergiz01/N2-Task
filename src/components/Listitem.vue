<template>
  <div>
    <ul class="space-y-5 font-medium text-white">
      <!-- Kullanıcı Bilgisi -->
      <li class="border-b pb-5 my-5">
        <div class="flex gap-2 items-center">
          <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="https://s3-alpha-sig.figma.com/img/a0c1/c232/be21862bc46024895aa05375e54b5c8a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EWCsIUIgbRkOkQ1hCw35-zAvp7qRPLsl5S52~QpYCNSG9JEcSLAqoOrw-ft97AZWgx0c1tbD-F35WEc8kE1JeISGBqZNgosu3SB8UE-kjPGlUn-qOCq6v0vFvJKX7CJTAbtpMTNKHriddlrw-uf1rIMBrRP7Z-wsszYjeXlFGeaBn5e3osBVDNhUoLn55dDBpRdRoDxhtxiiDccB5FXplaadSjDr~B7LQiVm2sX2YEygf1VHq9FL5ZF0Tmd62jCvx-KRSmWzGirfRUkF1sIhv94h23UQwn-bLKjwcaRSoNq-p7jRotRfjwyYU3lCz00vZk7d8mo9yDQMvO5nVjTzOw__"
            alt="Avatar" />
          <div class="flex flex-col">
            <p class="text-sm font-semibold">John Doe</p>
            <p class="text-sm text-gray-300">jone@lorem.com</p>
          </div>
        </div>
      </li>
      <div v-if="route.path === '/users'">
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
      </div>
      <div v-else>
        <li v-for="item in Menuitem2" :key="item" class="cursor-pointer flex items-center p-3 rounded-lg transition"
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
      </div>
      <!-- Menü Öğeleri -->

    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const Menuitem1 = ref(['Users'])
const Menuitem2 = ref(['Todos', 'Posts', 'Albums'])
const router = useRouter()
const route = useRoute()

// Method to handle menu item click
const handleMenuitem = (item) => {
  router.push(`/${item.toLowerCase()}`)
}

// Computed property to check if the current route matches the item
const isActive = (item) => {
  return route.path === `/${item.toLowerCase()}`
}

</script>