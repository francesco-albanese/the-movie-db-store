import {
  REQUEST_IN_PROGRESS,
  REQUEST_STATUS_SUCCESS,
  REQUEST_STATUS_FAIL
} from './locales.const'

import { getLocales } from '@themoviedb/the-movie-db-fetching'

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

export const fetchAllLocales = () => {
  return dispatch => {
    dispatch(requestInProgress())
    return getLocales()
      .then(result => dispatch(requestSuccessful(result.data)))
      .catch(error => { 
        dispatch(requestFail(error))
        throw error 
      })
  }
}