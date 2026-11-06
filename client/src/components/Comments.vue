<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const comments = ref([])
onMounted(async () => {
  const response = await fetch(`http://localhost:3000/posts/${route.params.post_id}/comments`)
  comments.value = await response.json()
})
</script>

<template>
  <router-link to="/posts">Back</router-link>
  <ul>
    <li v-for="comment in comments" :key="comment.id">
      {{ comment.content }}
    </li>
  </ul>
</template>