<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const username = ref('')
const password = ref('')
const handleSignUp = async () => {
  const response = await fetch('http://localhost:3000/signup',
      {
        method: 'POST', headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username: username.value, password: password.value})
      })
  router.push('/login')
}
</script>

<template>
  <form @submit.prevent="handleSignUp">
    <label for="username">Username</label>
    <input v-model="username" type="text" name="username" id="username">
    <label for="password">Password</label>
    <input v-model="password" type="password" name="password" id="password">
    <button type="submit">Sign up</button>
  </form>
</template>