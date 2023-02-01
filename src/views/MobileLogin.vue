<template>
  <div>
    {{ authStore.loginError }}
    {{ router }}
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore, useUserStore } from '@/stores'
import { useRouter } from 'vue-router'
import qs from 'query-string'
import { ref } from 'vue'

const cuser = ref<any>()

const authStore = useAuthStore()
const router = useRouter()

const { jwt, userId, username } = qs.parse(location.search)
localStorage.setItem('token', String(jwt))
localStorage.setItem('userId', String(userId))
cuser.value = JSON.stringify({
  jwt,
  userId,
  username
})
// useUserStore().$patch({ profile: user })
// push('/')
</script>
