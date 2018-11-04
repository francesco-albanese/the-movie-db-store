import {
  FETCH_GENRES_SUCCESS,
  FILTER_MOVIE_SUCCESS,
  REQUEST_IN_PROGRESS,
  REQUEST_STATUS_SUCCESS,
  REQUEST_STATUS_FAIL,
  SET_MOVIE_CATEGORY
} from './movies.const'

import { getGenres, getMovies } from '@themoviedb/the-movie-db-fetching'

import { filterAllMoviesByGenre } from './movies.selectors'

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

export const fetchAllMovies = (category = 'nowPlaying', language = 'en') => {
  return async dispatch => {
    dispatch(requestInProgress())

    try {
      const data = await getMovies(category, language)
      dispatch(requestSuccessful(data))
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

    const filteredMovies = filterAllMoviesByGenre(id)(getState())(id)
    dispatch(filteredMoviesSuccess(filteredMovies))
  }
}