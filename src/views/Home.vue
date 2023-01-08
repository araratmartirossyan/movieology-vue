<template>
  <page class="home-page">
    <div class="home-page__content">
      <h2 class="home-page__title">Рецензии</h2>
      <NewsSlider />
      <h2 class="home-page__title">Выбор редакции</h2>
      <MovieSlider />

      <div class="home-page__action">
        <StreamingSlider />
        <MovieSlider />
      </div>

      <div class="home-page__search">
        <what-to-watch-button />
      </div>
    </div>

    <template #bottom v-if="!authStore.loggedIn">
      <div class="home-page__bottom">
        <span class="pre_link">Войти через: </span>
        <div class="home-page__bottom-icons">
          <div @click="loginWithGoogle" class="link"><google-svg /></div>
        </div>
      </div>
    </template>
  </page>
</template>

<script lang="ts" setup>
// Components
import MovieSlider from '@/components/MovieSlider.vue'
import NewsSlider from '@/components/NewsSlider.vue'
import StreamingSlider from '@/components/StreamingSlider.vue'
import GoogleSvg from '@/assets/icons/google.svg'

// Stores
import { useAuthStore } from '@/stores'

const authStore = useAuthStore()

const loginWithGoogle = async () => {
  window.location.href = 'https://movie.incodewetrust.dev/connect/google'
}
</script>

<style lang="scss">
@import '@/assets/styles';

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
    margin-top: 40px;
    display: flex;
    flex-direction: column;
  }
}
</style>
