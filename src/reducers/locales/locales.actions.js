import { isEmpty } from 'lodash-es'

import {
  REQUEST_IN_PROGRESS,
  REQUEST_STATUS_SUCCESS,
  REQUEST_STATUS_FAIL,
  SET_ACTIVE_LOCALE
} from './locales.const'

import { getLocales } from '@themoviedb/the-movie-db-fetching'

const getLocaleFromUrl = () => {
  let splitPath = window.location.pathname.split('/')
  
  if (isEmpty(splitPath[ 1 ])) {
    window.history.replaceState(null, 'en', '/en')
    splitPath = window.location.pathname.split('/')
  }

  return splitPath[ 1 ]
}

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
  return async dispatch => {
    dispatch(requestInProgress())

    try {
      const response = await getLocales()
      const localeInURL = getLocaleFromUrl()
      const defaultLocale = response.find(locale => locale.default)

      let activeLocale = {}

      //set active locale to locale found in URL
      activeLocale = response.find(locale => locale.code === localeInURL)

      if (isEmpty(activeLocale)) {
        //if locale not found in URL or invalid
        //set activeLocale to English
        activeLocale = defaultLocale
      }

      dispatch(requestSuccessful({ activeLocale, response }))
    } catch (e) {
      dispatch(requestFail(e))
      throw e
    }
  }
}

export const setActiveLocale = payload => {
  return {
    type: SET_ACTIVE_LOCALE,
    payload
  }
}