<script setup>
import { ref, onMounted } from 'vue'
const posts = ref([])
onMounted(async () => {
  const response = await fetch("http://localhost:3000/posts")
  posts.value = await response.json()
})
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
        {{ post.title }}
    </li>
  </ul>
</template>