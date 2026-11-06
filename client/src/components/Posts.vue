<script setup>
import { ref, onMounted } from 'vue'
const posts = ref([])
onMounted(async () => {
  const response = await fetch("http://localhost:3000/posts")
  posts.value = await response.json()
})
</script>

<template>
  <router-link to="/homepage">Log out</router-link><br>
  <router-link to="/posts/new">Add post</router-link>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      {{ post.users.username }}:<br>
      {{ post.content }}<br>
      <router-link :to="`/posts/${post.id}/comments`">Comments</router-link>
    </li>
  </ul>
</template>