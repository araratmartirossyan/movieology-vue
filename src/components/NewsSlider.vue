<template>
  <div class="news-slider">
    <carousel :items-to-show="1.2" :transition="500" infinity>
      <slide v-for="post in newsStore.posts" :key="post._id">
        <NewsSlide :post="post" />
      </slide>
    </carousel>
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

.news-slider,
.carousel__viewport {
  height: 180px;
}
</style>
