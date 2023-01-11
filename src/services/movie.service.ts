import request from './rest.service'

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

export const fetchStreamingMovies = async (streamingId: string) => {
  try {
    const data = await request<MOVIEOLOGY.StreamingMovies[]>({
      method: 'get',
      url: `movie-categories?title=${streamingId}`
    })
    return data[0].movies
  } catch (error) {
    throw error
  }
}

export const fetchMovies = async () => {
  try {
    const data = await request<MOVIEOLOGY.Movie[]>({
      method: 'get',
      url: `movies?_limit=20`
    })
    return data
  } catch (err) {
    throw err
  }
}

export const movieSearch = async (searchQuery: string) => {
  try {
    const result = await request<MOVIEOLOGY.SearchResult>({
      method: 'get',
      url: `movies/find-movie?s=${searchQuery}`
    })
    return result
  } catch (error) {
    throw error
  }
}
