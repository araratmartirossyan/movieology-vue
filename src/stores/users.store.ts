import { defineStore } from 'pinia'

// Utils
import router from '@/router'
import { fetchUserProfile } from '@/services/auth.service'
import { fetchFavs } from '@/services/favs.service'
import { fetchWishList } from '@/services/wish.service'
import { ref } from 'vue'

export const useUserStore = defineStore('users', () => {
  const userId = ref<string>(localStorage.getItem('userId') ?? '')
  const profile = ref<MOVIEOLOGY.Profile>()
  const favorites = ref<MOVIEOLOGY.FavoriteMovie[]>()
  const wishes = ref<MOVIEOLOGY.WishListItem[]>()

  const init = () => {
    if (userId.value) {
      fetchProfile()
      return
    }
    logout()
  }

  const logout = () => {
    // router.push('/')
    // localStorage.removeItem('token')
    // localStorage.removeItem('userId')
  }

  const fetchProfile = async () => {
    try {
      const user = await fetchUserProfile()
      profile.value = user
      userId.value = user._id
    } catch (err) {
      logout()
    }
  }

  const fetchFavorites = async () => {
    favorites.value = await fetchFavs()
  }

  const getWishList = async () => {
    wishes.value = await fetchWishList()
  }

  return {
    fetchFavorites,
    fetchProfile,
    getWishList,
    logout,
    init,
    userId,
    profile,
    wishes,
    favorites
  }
})
