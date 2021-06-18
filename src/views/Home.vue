<template>
  <Page class="home-page">
    <div class="home-page__content">
      <what-to-watch-button />
    </div>

    <template #bottom v-if="!authStore.loggedIn">
      <div class="home-page__bottom">
        <span class="pre_link">Войти через: </span>
        <div class="home-page__bottom-icons">
          <div @click="loginWithGoogle" class="link"><google-svg /></div>
          <div @click="loginWithGoogle" class="link"><facebook-svg /></div>
        </div>
      </div>
    </template>
  </Page>
</template>

<script lang="ts" setup>
// Components
import GoogleSvg from '@/assets/icons/google.svg'
import FacebookSvg from '@/assets/icons/facebook.svg'
import { useAuthStore } from '@/stores'

const authStore = useAuthStore()

const loginWithGoogle = async () => {
  window.location.href = 'https://movie.incodewetrust.dev/connect/google'
}
</script>

<style lang="scss">
@import '@/assets/styles';

.home-page {
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  &__bottom {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;
    align-items: center;
    padding: 0 20px;
    .pre_link {
      margin-bottom: 10px;
      color: $color-white;
    }

    &-icons {
      display: flex;

      .link {
        text-align: center;
        padding: 10px;
        display: flex;
        width: 87px;
        height: 40px;
        margin-right: 10px;
        justify-content: center;
        text-transform: uppercase;
        border-radius: 4px;
        color: $color-white;
        text-decoration: none;
        background: $color-white;
      }
    }
  }
}
</style>
