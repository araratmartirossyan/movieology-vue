import request from './rest.service'
// import { propOr, head, isEmpty } from 'ramda'

export const suggestMovie = async () => {
  try {
    const data = await request<MOVIEOLOGY.Movie>({
      method: 'get',
      url: `movies/suggest`
    })
    return data
  } catch (err) {
    throw err
  }
}

export const fetchMovie = async (movieId: string) => {
  try {
    const data = await request<MOVIEOLOGY.Movie[]>({
      method: 'get',
      url: `movies/?id=${movieId}`
    })
    return data
  } catch (err) {
    throw err
  }
}

export const fetchMovies = async () => {
  try {
    const data = await request({
      method: 'get',
      url: `movies`
    })
    return data
  } catch (err) {
    throw err
  }
}

export const like = async (movieId: string) => {
  try {
    const userId = localStorage.getItem('userId')
    const like = await request({
      method: 'post',
      url: 'favorites',
      data: {
        profile: userId,
        movie: movieId
      }
    })
    return like
  } catch (err) {
    throw err
  }
}

export const unlike = async (movie: string) => {
  try {
    const profile = localStorage.getItem('userId')
    const like = await request({
      method: 'delete',
      url: `/movies/remove-from-fav`,
      data: {
        profile,
        movie
      }
    })

    return like
  } catch (err) {
    throw err
  }
}

export const checkIsFav = async (movie: string) => {
  try {
    const profile = localStorage.getItem('userId')
    const fav = await request<{ inFavorites: boolean }>({
      method: 'post',
      url: `/movies/is-fav`,
      data: {
        profile,
        movie
      }
    })
    return fav.inFavorites
  } catch (err) {
    return false
  }
}

export const fetchFavs = async (userId: string) => {
  try {
    const favs = await request({
      method: 'get',
      url: `favorites?profile=${userId}`
    })
    return favs
  } catch (error) {
    throw error
  }
}
