<template>
    <div class="flex flex-col">
        <div>
            <goHome></goHome>
        </div>
        <div class="flex items-center my-20 mx-5">
            <PostsCard></PostsCard>

        </div>
    </div>
</template>
<script setup>
import goHome from '@/components/goHome.vue'
import PostsCard from '@/components/PostsCard.vue'
</script>