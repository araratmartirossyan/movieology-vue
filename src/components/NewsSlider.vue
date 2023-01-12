<template>
  <div class="news-slider">
    <NewsSlide :post="post" v-for="post in newsStore.posts" :key="post._id" />
  </div>
</template>

<script setup lang="ts">
import NewsSlide from './NewsSlide.vue'
import { useNewsStore } from '@/stores/news.store'

const newsStore = useNewsStore()
</script>

<style lang="scss" scoped>
@import '@/assets/styles';

.news-slider {
  display: flex;
  position: relative;
  overflow: auto;
  padding: 0;
  overscroll-behavior-x: contain;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
  list-style: none;
}

.news-slider::-webkit-scrollbar {
  display: none;
}

.news-slider,
.carousel__viewport {
  height: 180px;
}
</style>
