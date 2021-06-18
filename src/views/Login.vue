<template></template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores'
import { useRouter } from 'vue-router'

const { googleAuth } = useAuthStore()
const { push } = useRouter()

const init = async () => {
  await googleAuth()
  push('/')
}
init()
</script>
