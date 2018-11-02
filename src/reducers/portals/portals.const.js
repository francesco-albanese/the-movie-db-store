export const NAMESPACE = 'PORTALS'

export const INITIAL_STATE = {
  allPortals: [],
  errors: [],
  fetchingInProgress: true
}

export const REQUEST_IN_PROGRESS = `${ NAMESPACE }/REQUEST_IN_PROGRESS`
export const REQUEST_STATUS_SUCCESS = `${ NAMESPACE }/REQUEST_STATUS_SUCCESS`
export const REQUEST_STATUS_FAIL = `${ NAMESPACE }/REQUEST_STATUS_FAIL`
export const OPEN = `${ NAMESPACE }/OPEN`
export const CLOSE = `${ NAMESPACE }/CLOSE`