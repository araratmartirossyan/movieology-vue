<template>
  <page v-if="!newsStore.loading">
    <template #prepend>
      <gs-icon icon="arrow-left" size="32" @click="$router.back()" />
    </template>
    <template #append v-if="authStore.loggedIn">
      <el-avatar
        :size="32"
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3EdZCJ7-noxgOD4QXA8SvxZWRSHFliZanJj2ndCpCREdPnY6U"
      />
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
          <span class="post__likes-count">
            {{ newsStore.likesCount }}
          </span>
        </div>
      </div>
      <Markdown class="post__text" :source="newsStore.post?.description" />
    </div>
  </page>
</template>

<script setup lang="ts">
import { ElAvatar, ElIcon } from 'element-plus'
import { Star, StarFilled } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Markdown from 'vue3-markdown-it'

import { useAuthStore, useNewsStore, useUserStore } from '@/stores'

const authStore = useAuthStore()
const newsStore = useNewsStore()

const poster = ref<string>('')

const {
  params: { id }
} = useRoute()

onMounted(async () => {
  const post = await newsStore.fetchPost(id as string)
  poster.value = `${BASE_URL}${post.poster.formats.medium.url}`
})

const BASE_URL = 'https://movie.incodewetrust.dev'

// Like logic
const handleLike = async () => {
  await newsStore.likePost()
}
</script>

<style lang="scss">
@import '@/assets/styles';

.post {
  margin-top: 60px;
  padding: $spacing-m;
  text-align: left;

  &__image {
    border-radius: 24px;
    width: 100%;
    box-shadow: 0px 0px 1px #000;
  }

  &__counters {
    display: flex;
    align-items: center;
  }

  &__likes-count {
    color: white;
    font-size: 24px;
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
  }
}
</style>
