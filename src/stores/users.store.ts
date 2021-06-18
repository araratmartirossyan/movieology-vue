import { defineStore } from 'pinia'

// Utils
import router from '@/router'
import { fetchUserProfile } from '@/services/auth.service'

type UserStore = {
  userId: string
  profile: MOVIEOLOGY.Profile
}

export const useUserStore = defineStore({
  id: 'users',
  state: () =>
    <UserStore>{
      userId: localStorage.getItem('userId'),
      profile: {}
    },
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
    }
  }
})
