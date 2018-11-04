export { NAMESPACE as MOVIES_NAMESPACE } from './movies.const'
export { 
  fetchAllMovies,
  fetchGenres, 
  filterMoviesById,
  setMovieCategory 
} from './movies.actions'
export { 
  getAllMovies,
  getAllGenres,
  getIsFiltering,
  getFilteredMovies,
  getMoviesFetchingInprogress,
  getMovieCategory,
  filterAllMoviesByGenre
} from './movies.selectors'

export { default as movies } from './movies.reducer'