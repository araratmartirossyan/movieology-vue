<template>
  <div class="slider">
    <MovieSlide v-for="movie in movies" :key="movie._id" :movie="movie" />
  </div>
</template>

<script setup lang="ts">
import MovieSlide from './MovieSlide.vue'

defineProps<{
  movies: MOVIEOLOGY.Movie[]
}>()
</script>

<style lang="scss">
@import '@/assets/styles';

.slider {
  display: flex;
  position: relative;
  padding: 0;
  overflow: scroll;
  overscroll-behavior-x: contain;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
  list-style: none;
  padding-right: $spacing-m;
}

.slider::-webkit-scrollbar {
  display: none;
}
</style>
