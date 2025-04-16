<template>
    <div>
        <goHome></goHome>
        <div class="grid grid-cols-3 gap-5">
            <Albumcard v-for="i in 10" :key="i"></Albumcard>
        </div>
    </div>
</template>

<script setup>
import Albumcard from '@/components/AlbumCard.vue'
import goHome from '@/components/goHome.vue'
</script>