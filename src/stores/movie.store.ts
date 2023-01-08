import { defineStore } from 'pinia'
import { ref } from 'vue'

// Services
import * as movieService from '../services/movie.service'
import { useFavoriteStore } from './favorite.store'

export const useMovieStore = defineStore('movies', () => {
  const movie = ref<MOVIEOLOGY.Movie>()
  const movies = ref<MOVIEOLOGY.Movie[]>()
  const loading = ref<boolean>()
  const movieId = ref<string>('')

  const favStore = useFavoriteStore()

  const fetchSuggestedMovie = async () => {
    loading.value = true
    movie.value = await movieService.suggestMovie()
    movieId.value = movie.value.id
    await favStore.checkIsFav(movie.value.id)
    loading.value = false
    return movie.value
  }

  const fetchMovie = async (id: string) => {
    loading.value = true
    const result = await movieService.fetchMovie(id)
    movie.value = result[0]
    movieId.value = movie.value.id
    await favStore.checkIsFav(movie.value.id)
    loading.value = false

    return movie.value
  }

  const fetchMovies = async () => {
    const result = await movieService.fetchMovies()
    movies.value = result
  }

  return {
    fetchSuggestedMovie,
    fetchMovie,
    fetchMovies,
    movies,
    movie,
    movieId,
    loading
  }
})
