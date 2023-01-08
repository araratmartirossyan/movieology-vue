import request from './rest.service'

export const fetchPost = async (postId: string) => {
  try {
    const data = await request<MOVIEOLOGY.Post[]>({
      method: 'get',
      url: `posts/?id=${postId}`
    })
    return data
  } catch (err) {
    throw err
  }
}

export const fetchPosts = async () => {
  try {
    const data = await request<MOVIEOLOGY.Post[]>({
      method: 'get',
      url: `posts?_limit=20`
    })
    return data
  } catch (err) {
    throw err
  }
}

export const like = async (postId: string) => {
  try {
    const userId = localStorage.getItem('userId')

    const like = await request({
      method: 'post',
      url: 'likes',

      data: {
        profile: userId,
        postId: postId
      }
    })
    return like
  } catch (err) {
    throw err
  }
}

export const checkIsLiked = async (postId: string) => {
  try {
    const fav = await request<{ liked: boolean }>({
      method: 'post',
      url: `/likes/is-liked`,
      data: {
        postId
      }
    })
    return fav.liked
  } catch (err) {
    return false
  }
}
