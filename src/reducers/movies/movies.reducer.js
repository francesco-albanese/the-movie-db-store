import { 
  INITIAL_STATE, 
  FETCH_GENRES_SUCCESS,
  FILTER_MOVIE_SUCCESS,
  REQUEST_IN_PROGRESS,
  REQUEST_STATUS_SUCCESS, 
  REQUEST_STATUS_FAIL,
  SEARCH_MOVIES_IN_PROGRESS,
  SET_IS_FILTERING,
  SET_MOVIE_CATEGORY
} from './movies.const'

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
        filtering: false,
        fetchingInProgress: false,
        searching: false
      }

    case FILTER_MOVIE_SUCCESS:
      return {
        ...state,
        filtering: false,
        filteredMovies: action.payload,
        searching: false
      }

    case REQUEST_IN_PROGRESS:
      return {
        ...state,
        fetchingInProgress: true,
        filtering: false,
        searching: false
      }

    case REQUEST_STATUS_FAIL:
      return {
        ...state,
        errors: [ ...state.errors, action.error ],
        fetchingInProgress: false,
        filtering: false,
        searching: false,
        searchMoviesInProgress: false
      }

    case REQUEST_STATUS_SUCCESS:
      return {
        ...state,
        allMovies: action.payload,
        fetchingInProgress: false,
        searchMoviesInProgress: false
      }

    case SEARCH_MOVIES_IN_PROGRESS: 
      return {
        ...state,
        filtering: false,
        movieCategory: '',
        searchMoviesInProgress: true
      }

    case SET_IS_FILTERING:
      return {
        ...state,
        filtering: true,
        movieCategory: '',
        searching: false
      }

    case SET_MOVIE_CATEGORY:
      return {
        ...state,
        filtering: false,
        movieCategory: action.payload,
        searching: false
      }

    default:
      return state
  }
}