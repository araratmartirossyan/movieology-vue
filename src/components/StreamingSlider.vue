<template>
  <div class="stream-slider">
    <div
      class="stream-slider__slide"
      v-for="{ id, icon } in streaming"
      :key="id"
      @click="setActiveTab(id)"
      :class="{
        active: id === activeTab
      }"
    >
      <component :is="icon" class="stream-slider__icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// Components
import Netflix from '@/assets/icons/netflix.svg'
import Disney from '@/assets/icons/disney.svg'
import Hbo from '@/assets/icons/hbo.svg'
import Apple from '@/assets/icons/apple.svg'
import Hulu from '@/assets/icons/hulu.svg'
import Prime from '@/assets/icons/prime.svg'

const streaming = [
  {
    name: 'Netflix',
    id: '1',
    icon: Netflix
  },
  {
    name: 'Disney',
    id: '2',
    icon: Disney
  },
  {
    name: 'Hbo',
    id: '3',
    icon: Hbo
  },
  {
    name: 'Apple',
    id: '4',
    icon: Apple
  },
  {
    name: 'Hulu',
    id: '5',
    icon: Hulu
  },
  {
    name: 'Prime',
    id: '6',
    icon: Prime
  }
]

const activeTab = ref<string>('1')
const setActiveTab = (id: string) => {
  activeTab.value = id
}
</script>

<style lang="scss">
@import '@/assets/styles';

.stream-slider {
  display: flex;
  position: relative;
  padding: 0;
  overflow: scroll;
  overscroll-behavior-x: contain;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
  list-style: none;
  margin-left: $spacing-m;
  margin-bottom: $spacing-m;

  &__slide {
    margin-right: 8px;
  }

  &__icon {
    width: 75px;
    height: 75px;
  }
}

.active path {
  fill: none;
  stroke: white;
  stroke-width: 1px;
}
</style>
