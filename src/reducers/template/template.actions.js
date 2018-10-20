import {
  REQUEST_IN_PROGRESS,
  REQUEST_STATUS_SUCCESS,
  REQUEST_STATUS_FAIL,
  SET_ACTIVE_ENTRY
} from './template.const'

import { getLayout } from '@themoviedb/the-movie-db-fetching'

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

const setActiveTemplateSuccess = template => {
  return {
    type: SET_ACTIVE_ENTRY,
    payload: template
  }
}

export const fetchAllTemplates = () => {
  return async dispatch => {
    dispatch(requestInProgress())

    try {
      const { data } = await getLayout()
      dispatch(requestSuccessful(data))
    } catch (e) {
      dispatch(requestFail(e))
      throw e
    }
  }
}

export const setActiveTemplate = template => {
  return dispatch => {
    dispatch(setActiveTemplateSuccess(template))
  }
}