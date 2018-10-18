export const NAMESPACE = 'TEMPLATE'

export const INITIAL_STATE = {
  activeTemplate: {},
  allTemplates: [],
  errors: {},
  fetchingInProgress: false
}

export const REQUEST_IN_PROGRESS = `${ NAMESPACE }/REQUEST_IN_PROGRESS`
export const REQUEST_STATUS_SUCCESS = `${ NAMESPACE }/REQUEST_STATUS_SUCCESS`
export const REQUEST_STATUS_FAIL = `${ NAMESPACE }/REQUEST_STATUS_FAIL`