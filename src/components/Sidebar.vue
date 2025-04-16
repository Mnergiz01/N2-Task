<template>
    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
        </svg>
    </button>

    <!-- Sidebar -->
    <aside id="logo-sidebar"
        class="fixed sm:static top-0 left-0 z-40 w-64 min-h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-800"
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