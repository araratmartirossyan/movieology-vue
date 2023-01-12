import { googleAuthProvider } from '@/services/auth.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './users.store'

export const useAuthStore = defineStore('auth', () => {
  const loading = ref<boolean>()
  const loginError = ref<string>()
  const token = ref<string | null>(null)

  const setLoading = () => {
    loading.value = !loading.value
  }

  const googleAuth = async () => {
    try {
      const { jwt, user } = await googleAuthProvider()
      localStorage.setItem('token', jwt)
      localStorage.setItem('userId', user.id)
      useUserStore().$patch({ profile: user })
    } catch (err) {
      loginError.value = JSON.stringify(err)
    }
  }

  return {
    loggedIn: computed(() => !!token.value),
    googleAuth,
    setLoading,
    loading,
    loginError,
    token
  }
})
