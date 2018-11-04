export const NAMESPACE = 'MOVIES'

export const INITIAL_STATE = {
  allMovies: [],
  filteredMovies: [],
  genres: [],
  movieDetails: {},
  movieCategory: '',
  errors: [],
  filtering: false,
  fetchingInProgress: true
}

export const REQUEST_IN_PROGRESS = `${ NAMESPACE }/REQUEST_IN_PROGRESS`
export const REQUEST_STATUS_SUCCESS = `${ NAMESPACE }/REQUEST_STATUS_SUCCESS`
export const REQUEST_STATUS_FAIL = `${ NAMESPACE }/REQUEST_STATUS_FAIL`
export const FETCH_MOVIE_DETAILS_SUCCESS = `${ NAMESPACE }/FETCH_MOVIE_DETAILS_SUCCESS`
export const FETCH_GENRES_SUCCESS = `${ NAMESPACE }/FETCH_GENRES_SUCCESS`
export const FILTER_MOVIE_SUCCESS = `${ NAMESPACE }/FILTER_MOVIE_SUCCESS`
export const SET_MOVIE_CATEGORY = `${ NAMESPACE }/SET_MOVIE_CATEGORY`