<template>
  <page class="search-page">
    <template #prepend>
      <gs-icon icon="arrow-left" size="32" @click="$router.back()" />
    </template>
    <div class="search-page__content">
      <el-input
        prefix-icon="el-icon-search"
        v-model="searchString"
        placeholder="Название фильма"
        clearable
      />

      <movie-list :is-empty="searchStore.totalFound === 0">
        <movie-list-item
          class="movie-list__card"
          v-for="movie in searchStore.foundMovie"
          :key="movie.id"
          :title="movie.title"
          :added="movie.added"
          :poster-path="movie.poster_path"
          :overview="movie.overview"
          @click="favoriteStore.addToWishList(movie)"
        />
      </movie-list>
    </div>
  </page>
</template>

<script lang="ts" setup>
// libs
import { ref, watch } from 'vue'
import { useDebounce } from '@vueuse/core'

// // Components
import { ElInput } from 'element-plus'
import Page from '@/components/layout/Page.vue'
import MovieList from '@/components/MovieList.vue'
import MovieListItem from '@/components/MovieListItem.vue'

// Stores
import { useFavoriteStore, useSearchStore } from '@/stores'

const searchStore = useSearchStore()
const favoriteStore = useFavoriteStore()

const searchString = ref('')
const debounced = useDebounce(searchString, 1000)

watch(debounced, () => {
  searchStore.search(searchString.value)
})
</script>

<style lang="scss">
@import '@/assets/styles';

.search-page {
  &__content {
    margin-top: 60px;

    padding: 0 $spacing-s;
  }
}
</style>
