<template>
  <page v-if="!newsStore.loading">
    <template #prepend>
      <gs-icon icon="arrow-left" size="32" @click="$router.back()" />
    </template>
    <div class="post">
      <img class="post__image" :src="poster" v-if="poster" />
      <div class="post__heading">
        <h2 class="post__title">{{ newsStore.post?.title }}</h2>
        <div class="post__counters">
          <el-icon class="post__like" @click="handleLike">
            <Star v-if="!newsStore.isLiked" />
            <StarFilled v-else />
          </el-icon>
          <span class="post__like-count">
            {{ newsStore.likesCount }}
          </span>
        </div>
      </div>
      <Markdown class="post__text" :source="newsStore.post?.description" />
    </div>
  </page>
</template>

<script setup lang="ts">
import { ElIcon } from 'element-plus'
import { Star, StarFilled } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Markdown from 'vue3-markdown-it'

import { useAuthStore, useNewsStore } from '@/stores'

const newsStore = useNewsStore()
const authStore = useAuthStore()

const poster = ref<string>('')

const {
  params: { id }
} = useRoute()
const { push } = useRouter()

onMounted(async () => {
  const post = await newsStore.fetchPost(id as string)
  poster.value = `${BASE_URL}${post.poster.url}`
})

const BASE_URL = 'https://movie.incodewetrust.dev'

// Like logic
const handleLike = async () => {
  if (authStore.loggedIn) {
    await newsStore.likePost()
    return
  }

  push({
    name: 'signIn'
  })
}
</script>

<style lang="scss">
@import '@/assets/styles';

.post {
  margin-top: 60px;
  padding: $spacing-m;
  text-align: left;

  &__image {
    border-radius: $border-radius-l;
    width: 100%;
    box-shadow: 0px 0px 1px #000;
  }

  &__counters {
    display: flex;
    align-items: center;
  }
  &__title {
    color: white;
    font-size: 20px;
    width: 90%;
  }

  &__text {
    color: #9b9898;
  }

  &__heading {
    display: flex;
    align-items: center;
  }

  &__like {
    color: white;
    font-size: 32px;

    &-count {
      color: white;
      font-size: 24px;
    }
  }
}
</style>
