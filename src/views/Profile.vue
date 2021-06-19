<template>
  <page class="profile-page">
    <template #prepend>
      <gs-icon icon="arrow-left" size="32" @click="$router.back()" />
    </template>
    <div class="profile-page__info">
      <el-avatar
        :size="100"
        src="https://image.flaticon.com/icons/png/512/2586/2586717.png"
      />

      <div class="profile-page__info_block">
        <h2>
          {{ userStore.profile.username }}
        </h2>
      </div>
    </div>
    <div class="profile-page__listing">
      <img
        v-for="movie in userStore.favorites"
        :key="movie.favId"
        :src="movie.Poster"
        @click="$router.push({ name: 'movie', params: { id: movie.id } })"
      />
    </div>
  </page>
</template>

<script setup lang="ts">
// Stores
import { useUserStore } from '@/stores'

// Components
import { ElAvatar } from 'element-plus'
import GsIcon from '@/components/Icons/GsIcon.vue'

const userStore = useUserStore()
userStore.fetchFavs()
</script>

<style lang="scss">
@import '@/assets/styles';

.profile-page {
  &__info {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &_block {
      color: $color-white;
    }
  }

  &__listing {
    column-count: 3;
    column-gap: 1em;
    padding: 0 10px;

    img {
      background-color: #eee;
      display: inline-block;
      margin: 0 0 0.5em;
      width: 100%;
    }
  }
}
</style>
