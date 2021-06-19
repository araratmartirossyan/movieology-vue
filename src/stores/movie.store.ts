import { defineStore } from 'pinia'
import {
  checkIsFav,
  fetchMovie,
  like,
  unlike,
  suggestMovie
} from '../services/movie.service'

// Utils
type MovieStore = {
  currentMovie: MOVIEOLOGY.Movie
  loading: boolean
  isFav: boolean
}

export const useMovieStore = defineStore({
  id: 'movies',
  state: () =>
    <MovieStore>{
      currentMovie: {},
      loading: false,
      isFav: false
    },
  getters: {
    movie: ({ currentMovie }) => currentMovie
  },
  actions: {
    async fetchSuggestedMovie() {
      this.loading = true
      this.currentMovie = await suggestMovie()
      this.isFav = await checkIsFav(this.currentMovie.id)
      this.loading = false
      return this.currentMovie
    },
    async fetchMovie(id: string) {
      this.loading = true
      const result = await fetchMovie(id)
      this.currentMovie = result[0]
      this.isFav = await checkIsFav(this.currentMovie.id)
      return this.currentMovie
    },
    async addToFavorite(movieId: string) {
      try {
        await like(movieId)
        this.isFav = true
      } catch (err) {
        this.isFav = false
      }
    },
    async removeFromFavorite(movieId: string) {
      try {
        await unlike(movieId)
        this.isFav = false
      } catch (err) {
        this.isFav = false
      }
    }
  }
})
