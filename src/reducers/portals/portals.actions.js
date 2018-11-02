import {
  REQUEST_IN_PROGRESS,
  REQUEST_STATUS_SUCCESS,
  REQUEST_STATUS_FAIL,
  NAMESPACE,
  OPEN,
  CLOSE
} from './portals.const'

import { getPortals } from '@themoviedb/the-movie-db-fetching'

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

const openPortalSuccess = activePortals => {
  return {
    type: OPEN,
    payload: activePortals
  }
}

const closePortalSuccess = inactivePortals => {
  return {
    type: CLOSE,
    payload: inactivePortals
  }
}

export const fetchAllportals = () => {
  return async dispatch => {
    dispatch(requestInProgress())

    try {
      const { data } = await getPortals()
      dispatch(requestSuccessful(data))
    } catch (e) {
      dispatch(requestFail(e))
      throw e
    }
  }
}

export const openPortal = portalName => {
  return (dispatch, getState) => {

    const { allPortals } = getState()[ NAMESPACE ]
    
    const activePortals = allPortals.reduce((allPortals, currentPortal) => {
      if (currentPortal.name === portalName) {
        currentPortal.active = true
      }

      allPortals.push(currentPortal)
      return allPortals
    }, [])

    dispatch(openPortalSuccess(activePortals))
  }
}

export const closePortal = portalName => {
  return (dispatch, getState) => {

    const { allPortals } = getState()[ NAMESPACE ]
    
    const inactivePortals = allPortals.reduce((allPortals, currentPortal) => {
      if (currentPortal.name === portalName) {
        currentPortal.active = false
      }

      allPortals.push(currentPortal)
      return allPortals
    }, [])

    dispatch(closePortalSuccess(inactivePortals))
  }
}