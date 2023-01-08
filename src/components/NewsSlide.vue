<template>
  <div class="news_item" @click="navigate" v-if="post">
    <div class="news_item__image">
      <span class="news_item__title">{{ post.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  post: MOVIEOLOGY.Post
}>()

const { push } = useRouter()
const BASE_URL = 'https://movie.incodewetrust.dev'
const poster = computed(() => {
  if (props.post.poster) {
    return `url(${BASE_URL}${props.post.poster.formats.medium.url})`
  }

  return 'https://via.placeholder.com/350/'
})
// const poster = ''

const navigate = () => {
  push({
    name: 'posts',
    params: {
      id: props.post._id
    }
  })
}
</script>

<style>
.news_item {
  color: #fff;
  font-size: 20px;
  display: flex;
  height: 340px;
  flex-direction: column;
  width: 100%;
  text-align: left;
}

.news_item__title {
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 8px;
}

.news_item__image {
  background-image: v-bind(poster);
  background-size: cover;
  border-radius: 24px;
  height: 180px;
  display: flex;
  flex-direction: column-reverse;
  padding: 16px;
  width: 100%;
  box-shadow: inset 0 0 50px #000;
}
</style>
