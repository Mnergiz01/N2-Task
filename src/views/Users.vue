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
import { ref, onMounted } from "vue";
import axios from "axios";
import Card from "@/components/Usercomponents/Card.vue";
import Title from "@/components/Todoscomponents/Title.vue";

const users = ref([]);

onMounted(async () => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    users.value = data;
    console.log(users.value);
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }
});
</script>
