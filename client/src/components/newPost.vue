<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'
const title = ref('')
const content = ref('')
const handleNewPost = async () => {
  const response = await fetch('http://localhost:3000/posts/new',
      { method: 'POST', headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify({ title: title.value, content: content.value })})
  if (!response.ok) {
    return
  }
  router.push('/posts')
}
</script>

<template>
  <form @submit.prevent="handleNewPost">
    <label for="title">Title</label>
    <input v-model="title" type="text" name="title" id="title">
    <label for="content">Content</label>
    <input v-model="content" type="text" name="content" id="content">
    <button type="submit">Add new post</button>
  </form>
</template>