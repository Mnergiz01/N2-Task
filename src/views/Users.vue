<template>
  <div>
    <Title />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
      <Card
        v-for="user in users"
        :key="user.id"
        :user="user"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useApiStore } from '@/stores/apiStore'
import Card from '@/components/usercomponents/Card.vue'
import Title from '@/components/todoscomponents/Title.vue'

const apiStore = useApiStore()
const users = computed(() => apiStore.users)

onMounted(async () => {
  if (users.value.length === 0) {
    try {
      await apiStore.fetchUsers()
    } catch (error) {
      console.error("Veri çekme hatası:", error)
    }
  }
})
</script>
