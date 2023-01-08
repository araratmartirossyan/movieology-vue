<template>
  <div class="news-slider">
    <NewsSlide :post="post" v-for="post in newsStore.posts" :key="post._id" />
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import NewsSlide from './NewsSlide.vue'
import { useNewsStore } from '@/stores/news.store'

const newsStore = useNewsStore()
newsStore.fetchPosts()
</script>

<style lang="scss" scoped>
@import '@/assets/styles';

.carousel__slide {
  margin-right: $spacing-m;
}

.carousel__slide:first-child {
  padding-left: $spacing-m;
}

.news-slider {
  display: flex;
  position: relative;
  padding: 0;
  overflow: scroll;
  overscroll-behavior-x: contain;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
  list-style: none;
}

.news-slider,
.carousel__viewport {
  height: 180px;
}
</style>
