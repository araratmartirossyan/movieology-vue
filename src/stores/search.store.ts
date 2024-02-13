import { movieSearch } from '@/services/movie.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useSearchStore = defineStore('searchStore', () => {
  const searchResult = ref<MOVIEOLOGY.SearchResult | null>(null)

  const search = async (searchQuery: string) => {
    const foundMovies = await movieSearch(searchQuery)
    searchResult.value = foundMovies
  }

  return {
    search,
    searchResult,
    foundMovie: computed(() =>
      searchResult.value ? searchResult.value.results : []
    ),
    totalFound: computed(() =>
      searchResult.value ? searchResult.value.total_results : 0
    )
  }
})
