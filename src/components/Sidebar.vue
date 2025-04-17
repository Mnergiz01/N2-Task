<template>
    
    <aside id="logo-sidebar"
        class="fixed sm:static top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-800"
        aria-label="Sidebar">
        <div class="h-full px-3 py-4 flex flex-col justify-between overflow-y-auto">
            <Listitem />
            <div class="mt-10 pt-4 border-t border-t-gray-600">
                <a href="https://n2mobil.com" class="flex items-center ps-2.5 mb-3">
                    <img :src="n2logo" class="h-6 me-3 sm:h-7 my-4" alt="N2Mobil Logo" />
                </a>
            </div>
        </div>
    </aside>
</template>
<script setup>
import n2logo from '@/assets/n2logo.png'
import Title from '@/components/Title.vue'
import Listitem from '@/components/Listitem.vue'

</script>