<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const username = ref('')
const password = ref('')
const handleMethod = async () => {
  const response = await fetch("http://localhost:3000/login",
      {method: "POST", headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username: username.value, password: password.value })})
  const data = await response.json()
  console.log(data)
  if (!response.ok) {
    return
  }
  localStorage.setItem("token", data.token)
  router.push('/posts')
}
</script>

<template>
  <form @submit.prevent="handleMethod">
    <label for="username">Username</label>
    <input v-model="username" type="text" name="username" id="username">
    <label for="password">Password</label>
    <input v-model="password" type="password" name="password" id="password">
    <button type="submit">Log in</button>
  </form>
</template>