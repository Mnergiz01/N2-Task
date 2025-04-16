<template>
    <div class="p-7 border rounded-xl flex flex-col gap-5 shadow-md">
      <!-- Grid Görsel Galeri -->
      <div class="grid grid-cols-2">
        <img
          v-for="i in 4"
          :key="i"
          :src="`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${i}.jpg`"
          alt="Gallery image"
          class="w-full h-auto rounded-lg object-cover"
        />
      </div>
  
      <!-- Açıklama Metni -->
      <div>
        <p class="text-gray-700 text-sm leading-relaxed">
          Non esse culpa molestiae omnis sed ol...
        </p>
      </div>
    </div>
  </template>
  