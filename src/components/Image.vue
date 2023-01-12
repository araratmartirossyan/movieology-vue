<template>
  <div>
    <div v-if="loading" class="skeleton-image"></div>
    <img v-else :src="image" :alt="alt" class="actual-image" @load="loaded" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref<boolean>(true)

defineProps<{
  alt: string
  image: string
}>()

const loaded = () => {
  loading.value = false
}
</script>

<style>
.skeleton-image {
  width: 300px;
  height: 200px;
  background: #f2f2f2;
}
.actual-image {
  display: none;
}
</style>
