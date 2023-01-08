<template>
  <div class="slider">
    <carousel :items-to-show="2.3" :transition="500" infinity>
      <slide v-for="movie in movieStore.movies" :key="movie._id">
        <MovieSlide :movie="movie" />
      </slide>
    </carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import MovieSlide from './MovieSlide.vue'
import { useMovieStore } from '@/stores/movie.store'

const movieStore = useMovieStore()
movieStore.fetchMovies()
</script>

<style lang="scss">
@import '@/assets/styles';

.carousel__slide {
  margin-right: $spacing-m;
}

.carousel__slide:first-child {
  padding-left: $spacing-m;
}
</style>
