import { defineStore } from 'pinia'

// Utils
import router from '@/router'
import { fetchUserProfile } from '@/services/auth.service'
import { fetchFavs } from '@/services/movie.service'

type UserStore = {
  userId: string
  profile: MOVIEOLOGY.Profile
  favorites: MOVIEOLOGY.FavoriteMovie[]
}

export const useUserStore = defineStore({
  id: 'users',
  state: () => <UserStore>(<unknown>{
      favorites: [],
      userId: localStorage.getItem('userId'),
      profile: {}
    }),
  getters: {},
  actions: {
    init() {
      if (this.userId) {
        this.fetchProfile()
        return
      }
      this.logout()
    },
    logout() {
      router.push('/')
    },
    async fetchProfile() {
      try {
        this.profile = await fetchUserProfile()
      } catch (err) {
        this.logout()
      }
    },
    async fetchFavs() {
      this.favorites = await fetchFavs()
    }
  }
})
