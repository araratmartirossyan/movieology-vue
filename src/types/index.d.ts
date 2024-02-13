declare namespace MOVIEOLOGY {
  enum GenreEnum {
    Action = 'Action',
    Adventure = 'Adventure',
    Animation = 'Animation',
    Biography = 'Biography',
    Comedy = 'Comedy',
    Crime = 'Crime',
    Documentary = 'Documentary',
    Drama = 'Drama',
    Family = 'Family',
    Fantasy = 'Fantasy',
    FilmNoir = 'FilmNoir',
    History = 'History',
    Horror = 'Horror',
    Music = 'Music',
    Musical = 'Musical',
    Romance = 'Romance',
    SciFi = 'SciFi',
    ShortFilm = 'ShortFilm',
    Sport = 'Sport',
    Superhero = 'Superhero',
    Thriller = 'Thriller',
    War = 'War',
    Western = 'Western'
  }

  type Genre = {
    _id: string
    title: string
    createdAt: string
    updatedAt: string
    __v: string
    id: string
    movie: string
  }

  interface StreamingMovies {
    movies: Movie[]
    title: string
    _id: string
    id: string
  }

  interface Format {
    name: string
    hash: string
    ext: string
    mime: string
    width: number
    height: number
    size: number
    path: string | null
    url: string
  }

  interface Formats {
    thumbnail: Format
    large: Format
    medium: Format
    small: Format
  }

  interface Poster {
    _id: string
    name: string
    alternativeText: string
    caption: string
    hash: stirng
    ext: string
    mime: string
    size: number
    width: number
    height: number
    url: string
    formats: Formats
    id: string
  }

  interface Like {
    post: string
    user: string
  }

  interface Post {
    _id: string
    description: string
    title: string
    createdAt: string
    poster: Poster
    likes: Like[]
  }

  interface Movie {
    Genre: GenreEnum
    _id: string
    id: string
    Plot: string
    Title: string
    Year: string
    Rated: string
    Runtime: string
    imdbRating: string
    Actors: string
    Poster: string
    createdAt: string
    updatedAt: string
    __v: number
    genres: Genre[]
  }

  interface SearchResult {
    page: number
    total_pages: number
    total_results: number
    results: TMDBMovie[]
  }

  interface TMDBMovie {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    added?: boolean
  }

  interface FavoriteMovie extends Movie {
    favId: string
  }

  type Role = {
    id: string
    _id: string
    name: string
    description: string
    type: string
  }

  type Profile = {
    blocked: boolean
    confirmed: boolean
    createdAt: string
    updatedAt: string
    email: string
    username: string
    id: string
    _id: string
    provider: string
    role: Role
  }

  type GoogleAuthResponse = {
    jwt: string
    user: Profile
  }

  // Requests
  interface WishListItem {
    createdAt: string
    id: string
    movie: Movie
    wishes: Profile
    published_at: string
    updatedAt: string
    _id: string
  }
}

type Nullable<T> = {
  [P in keyof T]: T[P] | null
}
