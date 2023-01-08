<template>
  <page class="home-page">
    <template #append v-if="authStore.loggedIn">
      <div class="home-page__top">
        <el-avatar
          :size="32"
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3EdZCJ7-noxgOD4QXA8SvxZWRSHFliZanJj2ndCpCREdPnY6U"
        />
      </div>
    </template>
    <div class="home-page__content">
      <NewsSlider />
      <h2>Выбор редакции</h2>
      <MovieSlider />

      <div class="home-page__action">
        <what-to-watch-button />
      </div>
    </div>

    <template #bottom v-if="!authStore.loggedIn">
      <div class="home-page__bottom">
        <span class="pre_link">Войти через: </span>
        <div class="home-page__bottom-icons">
          <div @click="loginWithGoogle" class="link"><google-svg /></div>
          <div class="link disabled"><facebook-svg /></div>
        </div>
      </div>
    </template>
  </page>
</template>

<script lang="ts" setup>
// Components
import { User } from '@element-plus/icons-vue'
import { ElAvatar } from 'element-plus'
import MovieSlider from '@/components/MovieSlider.vue'
import NewsSlider from '@/components/NewsSlider.vue'

import GoogleSvg from '@/assets/icons/google.svg'
import FacebookSvg from '@/assets/icons/facebook.svg'

import { useAuthStore, useUserStore } from '@/stores'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const { push } = useRouter()

const loginWithGoogle = async () => {
  window.location.href = 'https://movie.incodewetrust.dev/connect/google'
}

const redirect = () => {
  push('/profile')
}
</script>

<style lang="scss">
@import '@/assets/styles';

.home-page {
  &__top {
    display: flex;
  }
  h2 {
    color: white;
    text-align: left;
    margin-left: $spacing-m;
  }
  .user-icon {
    font-size: 26px;
    border-radius: 4px;
    padding: 4px;
    color: white;
    background: $color-primary;
  }

  &__action {
    margin-left: $spacing-m;
  }

  &__content {
    margin-top: 80px;
    display: flex;
    height: 100%;
    flex-direction: column;
  }
}
</style>
