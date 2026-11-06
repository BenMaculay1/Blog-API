<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { useRoute } from 'vue-router'
const route = useRoute()
import { ref } from 'vue'
const content = ref('')
const handleNewComment = async () => {
  const response = await fetch(`http://localhost:3000/posts/${route.params.post_id}/comments/new`,
      { method: 'POST', headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify({  content: content.value })})
  if (!response.ok) {
    return
  }
  router.push(`/posts/${route.params.post_id}/comments`)
}

</script>

<template>
  <router-link :to="`/posts/${route.params.post_id}/comments`">Back</router-link>
  <form @submit.prevent="handleNewComment">
    <label for="content">Content</label>
    <textarea v-model="content" type="text" name="content" id="content" rows="6"></textarea>
    <button type="submit">Add comment</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 400px;
}
</style>