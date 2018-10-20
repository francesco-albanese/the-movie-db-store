import {
  REQUEST_IN_PROGRESS,
  REQUEST_STATUS_SUCCESS,
  REQUEST_STATUS_FAIL,
  SET_ACTIVE_ENTRY
} from './pages.const'

import { getPages } from '@themoviedb/the-movie-db-fetching'

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

const setActivePageSuccess = page => {
  return {
    type: SET_ACTIVE_ENTRY,
    payload: page
  }
}

export const fetchAllPages = () => {
  return async dispatch => {
    dispatch(requestInProgress())

    try {
      const { data } = await getPages()
      dispatch(requestSuccessful(data))
    } catch (e) {
      dispatch(requestFail(e))
      throw e
    }
  }
}

export const setActivePage = page => {
  return dispatch => {
    dispatch(setActivePageSuccess(page))
  }
}