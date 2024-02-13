import { ElMessage } from 'element-plus'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// Services
import * as favoriteService from '@/services/favs.service'
import { pushToWishList } from '@/services/wish.service'
import { useSearchStore } from './search.store'

export const useFavoriteStore = defineStore('favoriteStore', () => {
  const isFav = ref<boolean>()
  const wishingError = ref<string | null>()
  const searchStore = useSearchStore()

  const checkIsFav = async (movieId: string) => {
    isFav.value = await favoriteService.checkIsFav(movieId)
  }

  const addToFavorite = async (movieId: string) => {
    try {
      await favoriteService.like(movieId)
      isFav.value = true
    } catch (err) {
      isFav.value = false
    }
  }

  const removeFromFavorite = async (movieId: string) => {
    try {
      await favoriteService.unlike(movieId)
      isFav.value = false
    } catch (err) {
      isFav.value = false
    }
  }

  const addToWishList = async (movie: MOVIEOLOGY.TMDBMovie) => {
    try {
      await pushToWishList(movie)
      ElMessage.success({
        message: 'Добавлено',
        type: 'success'
      })

      const searches = searchStore.searchResult
      if (searches?.results) {
        const foundIndex = searches.results.findIndex(
          (item) => item.id === movie.id
        )

        searches.results[foundIndex] = {
          ...searches.results[foundIndex],
          added: true
        }
      }
    } catch (err: any) {
      ElMessage.error({
        message: 'Уже в списке :)',
        type: 'error'
      })
      wishingError.value = err.data.message
    }
  }

  return {
    wishingError,
    isFav,
    checkIsFav,
    addToFavorite,
    addToWishList,
    removeFromFavorite
  }
})
