<template>
  <page class="singin-page" hide-login>
    <template #prepend>
      <gs-icon icon="arrow-left" size="32" @click="$router.back()" />
    </template>

    <div class="singin-page__info">
      <!-- <Carousel :slides="dynamicImages" /> -->
      hello
      {{ userData }}
      hello2
      <div class="singin-page__actions">
        <button @click="loginWithGoogle" class="singin-page__info-link">
          <span> Войти через </span>
          <google-svg />
        </button>
      </div>
    </div>
  </page>
</template>

<script setup lang="ts">
import qs from 'query-string'
import GoogleSvg from '@/assets/icons/google.svg'
import Carousel from '@/components/Carousel.vue'
import { computed, onMounted, ref } from 'vue'
import { App, URLOpenListenerEvent } from '@capacitor/app'

const loginWithGoogle = async () => {
  window.location.href = 'https://movie.incodewetrust.dev/connect/google'
}

const swiperContent = [
  {
    title: 'Создай свое кино-пространство',
    image: 'dance.png',
    description:
      'Создавай виш-листы, отмечай просмотренное. Искуственный интелект подскажет что смотреть дальше'
  },
  {
    title: 'Найди свое кино',
    image: 'home.png',
    description:
      'Мы собираем лучшую коллекцию фильмов к просмотру. Найди лучшее кино для вечера с друзьямии или на едине с собой'
  },
  {
    title: 'Не убивай время',
    image: 'horror.jpg',
    description:
      'Не трать время на кринжовый просмотр. Попробуй наши рекомендации или создай свои и отправь их друзьям'
  }
]

const dynamicImages = computed(() =>
  swiperContent.map((item) => ({
    ...item,
    image: new URL(`../assets/arts/${item.image}`, import.meta.url).href
  }))
)

const userData = ref<any>({})

onMounted(async () => {
  App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
    console.log('EVENT', event)
    // this.zone.run(() => {
    //   const domain = 'devdactic.com'

    //   const pathArray = event.url.split(domain)
    //   // The pathArray is now like ['https://devdactic.com', '/details/42']

    //   // Get the last element with pop()
    //   const appPath = pathArray.pop()
    //   if (appPath) {
    //     this.router.navigateByUrl(appPath)
    //   }
    // })
  })
  console.log('RENDERED 2')
  // if (Capacitor.isNativePlatform()) {
  //   await Browser.addListener('browserPageLoaded', () => {

  //   })
  // }

  // Plugins.Browser.addListener('browserPageLoaded', (info: any) => {
  //   userData.value = info
  //   // info.url contains the current URL of the page
  //   // Use this to access the browser's router and navigate to the appropriate route
  // })
  // const { jwt, userId, username } = qs.parse(location.search)
  // localStorage.setItem('token', String(jwt))
  // localStorage.setItem('userId', String(userId))
  // userData.value = JSON.stringify({
  //   jwt,
  //   userId,
  //   username
  // })
})
</script>

<style lang="scss">
@import '@/assets/styles';

.singin-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__info {
    padding: $spacing-m;
    margin-top: 60px;
  }

  img {
    width: 100%;
    border-radius: $border-radius-l;
  }

  &__actions {
    margin-top: $spacing-xl;
  }

  &__info {
    width: 100%;
    &-link {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: $border-radius-l;
      border: none;
      font-size: 18px;
      vertical-align: middle;
      background-color: white;
      width: 100%;
      height: 60px;

      span {
        margin-right: 10px;
      }
    }
  }
}
</style>
