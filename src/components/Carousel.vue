<template>
  <div class="carousel" ref="carousel" v-if="slides.length">
    <transition name="slide">
      <div v-if="show">
        <img :src="slides[currentIndex].image" />
        <div class="carousel-content">
          <h3>{{ slides[currentIndex].title }}</h3>
          <p>{{ slides[currentIndex].description }}</p>
        </div>
      </div>
    </transition>
    <div class="active-dots">
      <button
        v-for="(image, key) in slides"
        :key="`active-dot-${key}`"
        :class="{ active: key === currentIndex }"
      ></button>
    </div>
    <!-- <button @click="next">Next</button> -->
  </div>
</template>

<script lang="ts" setup>
import * as Hammer from 'hammerjs'
import { ref, onMounted } from 'vue'

const currentIndex = ref<number>(0)
const directionEnter = ref<string>('translateX(100%)')
const directionLeave = ref<string>('translateX(100%)')

const show = ref<boolean>(true)
const carousel = ref()
const props = defineProps<{
  slides: {
    image: string
    title: string
    description: string
  }[]
}>()

const next = () => {
  directionEnter.value = 'translateX(100%)'
  directionLeave.value = 'translateX(-100%)'

  show.value = false
  setTimeout(() => {
    show.value = true
    if (currentIndex.value === props.slides.length - 1) {
      currentIndex.value = 0
    } else {
      currentIndex.value++
    }
  }, 100)
}

const prev = () => {
  directionEnter.value = 'translateX(100%)'
  directionLeave.value = 'translateX(100%)'
  show.value = false
  setTimeout(() => {
    show.value = true
    if (currentIndex.value === 0) {
      currentIndex.value = props.slides.length - 1
    } else {
      currentIndex.value--
    }
  }, 100)
}

onMounted(() => {
  // @ts-ignore
  const element = new Hammer(carousel.value)
  element.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL })
  element.on('swipeleft', next)
  element.on('swiperight', prev)
})
</script>

<style lang="scss">
@import '@/assets/styles';

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter {
  transform: v-bind(directionEnter);
}
.slide-leave-to {
  transform: v-bind(directionLeave);
}

.carousel {
  width: 100%;
  position: relative;
  height: 400px;
  img {
    width: 100%;
  }

  &-content {
    text-align: left;
    h3 {
      margin: 0;
      color: white;
    }

    p {
      color: white;
    }
  }
}

.active-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;

  button {
    height: 10px;
    margin-right: 8px;
    border-radius: 8px;
    border: none;
    background: white;
  }

  .active {
    background: #5628ee;
  }
}
</style>
