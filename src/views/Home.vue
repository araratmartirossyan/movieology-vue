<template>
  <page class="home-page">
    <transition name="fade">
      <Preloader v-if="loading" />
    </transition>
    <div class="home-page__content">
      <h2 class="home-page__title">Рецензии</h2>
      <NewsSlider />
      <h2 class="home-page__title">Выбор редакции</h2>
      <MovieSlider :movies="movieStore.movies" />

      <div class="home-page__action">
        <StreamingSlider @on-change="fetchStreamingMovies" />
        <MovieSlider
          v-if="movieStore.streamingMovies"
          :movies="movieStore.streamingMovies"
        />
      </div>

      <div class="home-page__search">
        <what-to-watch-button />
      </div>
    </div>
  </page>
</template>

<script lang="ts" setup>
// Components
import Preloader from '@/components/Preloader.vue'
import MovieSlider from '@/components/MovieSlider.vue'
import NewsSlider from '@/components/NewsSlider.vue'
import StreamingSlider from '@/components/StreamingSlider.vue'

// Stores
import { useMovieStore, useNewsStore } from '@/stores'
import { onMounted, ref, computed } from 'vue'

const movieStore = useMovieStore()
const newsStore = useNewsStore()

movieStore.fetchMovies()
newsStore.fetchPosts()

const fetchStreamingMovies = async (id: string) => {
  await movieStore.fetchStreamingMovies(id)
}
fetchStreamingMovies('netflix')

const loaded = computed(
  () => movieStore.streamingMovies.length && movieStore.movies.length
)

const loading = ref<boolean>(false)

onMounted(() => {
  if (!loaded.value) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
    }, 1500)
  }
})
</script>

<style lang="scss">
@import '@/assets/styles';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.home-page {
  &__top {
    display: flex;
  }

  &__title {
    color: white;
    text-align: left;
    margin-left: $spacing-m;
  }

  &__action {
    margin-top: $spacing-l;
  }

  &__search {
    padding: $spacing-m;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }
}
</style>
