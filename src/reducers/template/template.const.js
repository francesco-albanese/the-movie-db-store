export const NAMESPACE = 'TEMPLATE'

export const INITIAL_STATE = {
  activeTemplate: {},
  allTemplates: [],
  errors: [],
  fetchingInProgress: true
}

export const REQUEST_IN_PROGRESS = `${ NAMESPACE }/REQUEST_IN_PROGRESS`
export const REQUEST_STATUS_SUCCESS = `${ NAMESPACE }/REQUEST_STATUS_SUCCESS`
export const REQUEST_STATUS_FAIL = `${ NAMESPACE }/REQUEST_STATUS_FAIL`
export const SET_ACTIVE_ENTRY = `${ NAMESPACE }/SET_ACTIVE_ENTRY`