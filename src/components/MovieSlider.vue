<template>
  <div class="slider">
    <MovieSlide
      v-for="movie in movieStore.movies"
      :key="movie._id"
      :movie="movie"
    />
  </div>
</template>

<script setup lang="ts">
import MovieSlide from './MovieSlide.vue'
import { useMovieStore } from '@/stores/movie.store'

const movieStore = useMovieStore()
movieStore.fetchMovies()
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
}
</style>
