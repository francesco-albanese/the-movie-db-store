import { 
  INITIAL_STATE, 
  FETCH_GENRES_SUCCESS,
  FILTER_MOVIE_SUCCESS,
  REQUEST_IN_PROGRESS,
  REQUEST_STATUS_SUCCESS, 
  REQUEST_STATUS_FAIL,
  SET_MOVIE_CATEGORY
} from './movies.const'

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
        filtering: false,
        fetchingInProgress: false
      }

    case FILTER_MOVIE_SUCCESS:
      return {
        ...state,
        filtering: true,
        filteredMovies: action.payload
      }

    case REQUEST_IN_PROGRESS:
      return {
        ...state,
        fetchingInProgress: true
      }

    case REQUEST_STATUS_FAIL:
      return {
        ...state,
        errors: [ ...state.errors, action.error ],
        fetchingInProgress: false
      }

    case REQUEST_STATUS_SUCCESS:
      return {
        ...state,
        allMovies: action.payload,
        filteredMovies: [],
        filtering: false,
        fetchingInProgress: false
      }

    case SET_MOVIE_CATEGORY:
      return {
        ...state,
        filtering: false,
        filteredMovies: [],
        movieCategory: action.payload
      }

    default:
      return state
  }
}