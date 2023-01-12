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
    id: 'netflix',
    icon: Netflix
  },
  {
    name: 'Disney',
    id: 'disney',
    icon: Disney
  },
  {
    name: 'Hbo',
    id: 'hbo',
    icon: Hbo
  },
  {
    name: 'Apple',
    id: 'appleTv',
    icon: Apple
  },
  {
    name: 'Hulu',
    id: 'hulu',
    icon: Hulu
  },
  {
    name: 'Prime',
    id: 'amazon',
    icon: Prime
  }
]

const emits = defineEmits<{
  (e: 'on-change', id: string): void
}>()

const activeTab = ref<string>('netflix')
const setActiveTab = (id: string) => {
  activeTab.value = id
  emits('on-change', id)
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
  padding-left: $spacing-m;
  margin-bottom: $spacing-m;

  &::-webkit-scrollbar {
    display: none;
  }

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
