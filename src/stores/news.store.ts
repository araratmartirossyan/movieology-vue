import { defineStore } from 'pinia'
import { compile, computed, ref } from 'vue'

// Services
import * as newsService from '../services/news.service'

export const useNewsStore = defineStore('news', () => {
  // Posts
  const post = ref<MOVIEOLOGY.Post>()
  const posts = ref<MOVIEOLOGY.Post[]>()
  const loading = ref<boolean>()

  const fetchPost = async (id: string) => {
    loading.value = true
    const [result] = await newsService.fetchPost(id)
    post.value = result
    checkLike(result._id)
    loading.value = false

    return post.value
  }

  const fetchPosts = async () => {
    const result = await newsService.fetchPosts()
    posts.value = result
  }
  // Likes
  const isLiked = ref<boolean>(false)

  const likePost = async () => {
    await newsService.like(post.value?._id || '')
    isLiked.value = !isLiked.value
  }

  const checkLike = async (id: string) => {
    isLiked.value = await newsService.checkIsLiked(id)
  }

  return {
    fetchPost,
    fetchPosts,
    posts,
    post: computed(() => post.value),
    loading,
    // likes
    likesCount: computed(() => post.value?.likes.length),
    checkLike,
    likePost,
    isLiked
  }
})
