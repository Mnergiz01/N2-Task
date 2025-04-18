import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useApiStore = defineStore("api", () => {
  const todos = ref([]);
  const users = ref([]);
  const posts = ref([]);
  const albums = ref([]);
  const photos = ref([]);
  const userDetail = ref(null);
  const userPosts = ref([]);

  // Todos'u localStorage ile birlikte al
  const fetchTodos = async (userId) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    );
    const saved = localStorage.getItem(`completedTodos-${userId}`);
    const storedCompleted = saved ? JSON.parse(saved) : [];

    todos.value = res.data.map((todo) => ({
      ...todo,
      completed: storedCompleted.includes(todo.id),
    }));
  };

  const updateLocalCompleted = (userId, currentTodos) => {
    const completedIds = currentTodos
      .filter((todo) => todo.completed)
      .map((todo) => todo.id);

    localStorage.setItem(
      `completedTodos-${userId}`,
      JSON.stringify(completedIds)
    );
  };

  const fetchUsers = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    users.value = res.data;
  };

  const fetchPosts = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    posts.value = res.data;
  };

  const fetchPostsByUser = async (userId) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    userPosts.value = res.data;
  };

  const fetchAlbums = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/albums");
    albums.value = res.data;
  };

  const fetchPhotos = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    photos.value = res.data;
  };

  const fetchUserDetail = async (userId) => {
    // Eğer veriye zaten sahipse tekrar yükleme
    if (!userDetail.value || userDetail.value.id !== userId) {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        userDetail.value = res.data;
      } catch (error) {
        userDetail.value = null;
        console.error("Kullanıcı verisi alınırken hata oluştu:", error);
      }
    }
  };

  return {
    albums,
    photos,
    posts,
    userPosts,
    todos,
    users,
    userDetail,
    fetchTodos,
    updateLocalCompleted,
    fetchUsers,
    fetchPosts,
    fetchPostsByUser,
    fetchAlbums,
    fetchPhotos,
    fetchUserDetail,
  };
});
