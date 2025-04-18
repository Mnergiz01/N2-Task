<template>
  <div class="flex min-h-screen">
    
    <Sidebar></Sidebar>
    
    <main class="flex flex-col flex-1 min-h-screen p-10">
      
      <div>
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script setup>

import Sidebar from '@/components/sidebarcomponents/sidebar.vue'

</script>

<style scoped>
</style>
