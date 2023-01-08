<template>
  <div class="carousel_item" @click="navigate">
    <div class="carousel_item__image"></div>
    <span class="carousel_item__title">{{ movie.Title }}</span>
    <span class="carousel_item__subtitle"
      >{{ movie.Runtime }}, {{ movie.Year }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
  movie: MOVIEOLOGY.Movie
}>()

const { push } = useRouter()
const poster = `url(${props.movie.Poster})`

const navigate = () => {
  push({
    name: 'movie',
    params: {
      id: props.movie._id
    }
  })
}
</script>

<style>
.carousel_item {
  color: #fff;
  font-size: 20px;
  display: flex;
  height: 340px;
  flex-direction: column;
  width: 100%;
  text-align: left;
}

.carousel_item__title {
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 8px;
}

.carousel_item__subtitle {
  font-size: 14px;
  color: grey;
  font-weight: 600;
  margin-top: 8px;
}

.carousel_item__image {
  background-image: v-bind(poster);
  background-size: cover;
  border-radius: 24px;
  height: 240px;
  width: 100%;
  box-shadow: inset 0 1px 2px #000;
}
</style>
