import { isEmpty } from 'lodash-es'

import {
  FETCH_GENRES_SUCCESS,
  FETCH_MOVIE_BY_ID_SUCCESS,
  FILTER_MOVIE_SUCCESS,
  REQUEST_IN_PROGRESS,
  REQUEST_STATUS_SUCCESS,
  REQUEST_STATUS_FAIL,
  SEARCH_MOVIES_IN_PROGRESS,
  SET_IS_FILTERING,
  SET_MOVIE_CATEGORY
} from './movies.const'

import { 
  getGenres, 
  getMovieById,
  getMovies,
  getMoviesByQuery 
} from '@themoviedb/the-movie-db-fetching'

import { filterAllMoviesByGenre, filterAllMoviesById } from './movies.selectors'

const requestInProgress = () => {
  return {
    type: REQUEST_IN_PROGRESS
  }
}

const requestSuccessful = payload => {
  return {
    type: REQUEST_STATUS_SUCCESS,
    payload
  }
}

const requestFail = error => {
  return {
    type: REQUEST_STATUS_FAIL,
    error
  }
}

const fetchGenresSuccess = payload => {
  return {
    type: FETCH_GENRES_SUCCESS,
    payload
  }
}

const filteredMoviesSuccess = payload => {
  return {
    type: FILTER_MOVIE_SUCCESS,
    payload
  }
}

const isFiltering = () => {
  return {
    type: SET_IS_FILTERING
  }
}

const searchInProgress = () => {
  return {
    type: SEARCH_MOVIES_IN_PROGRESS
  }
}

const fetchMovieSuccess = payload => {
  return {
    type: FETCH_MOVIE_BY_ID_SUCCESS,
    payload
  }
}

export const fetchAllMovies = (category = 'nowPlaying', language = 'en') => {
  return async(dispatch, getState) => {
    dispatch(requestInProgress())

    try {
      const data = await getMovies(category, language)
      dispatch(requestSuccessful(data))
      const filteredMovies = filterAllMoviesByGenre(getState())
      dispatch(filteredMoviesSuccess(filteredMovies))
    } catch (e) {
      dispatch(requestFail(e))
      throw e
    }
  }
}

export const setMovieCategory = payload => {
  return {
    type: SET_MOVIE_CATEGORY,
    payload
  }
}

export const fetchGenres = (language = 'en') => {
  return async dispatch => {
    dispatch(requestInProgress())

    try {
      const { data } = await getGenres(language)
      dispatch(fetchGenresSuccess(data))
    } catch (e) {
      dispatch(requestFail(e))
      throw e
    }
  }
}

export const filterMoviesById = id => {

  return (dispatch, getState) => {
    dispatch(isFiltering())
    const filteredMovies = filterAllMoviesById(id)(getState())(id)
    dispatch(requestSuccessful(filteredMovies))
  }
}

export const fetchMoviesByQuery = (language = 'en', query = '') => {
  return async(dispatch, getState) => {

    try {
      if (!isEmpty(query)) {
        dispatch(searchInProgress())

        const { data } = await getMoviesByQuery(language, query)
        dispatch(requestSuccessful(data))
        
        const filteredMovies = filterAllMoviesByGenre(getState())
        return dispatch(filteredMoviesSuccess(filteredMovies))
      }
      return false
    } catch (e) {
      dispatch(requestFail(e))
      throw e
    }
  }
}

export const fetchMovieById = (movie_id, language = 'en') => {
  return async dispatch => {
    dispatch(requestInProgress())

    try {
      const data = await getMovieById(movie_id, language)
      dispatch(fetchMovieSuccess(data))
    } catch (e) {
      dispatch(requestFail(e))
      throw e
    }
  }
}