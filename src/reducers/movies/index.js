export { NAMESPACE as MOVIES_NAMESPACE } from './movies.const'
export { 
  fetchAllMovies,
  fetchGenres, 
  fetchMovieById,
  fetchMoviesByQuery,
  filterMoviesById,
  setMovieCategory 
} from './movies.actions'
export { 
  getAllMovies,
  getAllGenres,
  getIsFiltering,
  getIsSearching,
  getFilteredMovies,
  getMoviesFetchingInprogress,
  getMovieCategory,
  getMovieDetails,
  getSearchingInProgress,
  filterAllMoviesByGenre
} from './movies.selectors'

export { default as movies } from './movies.reducer'