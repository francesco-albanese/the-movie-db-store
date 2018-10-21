export const NAMESPACE = 'LOCALES'

export const INITIAL_STATE = {
  activeLocale: {},
  allLocales: [],
  errors: [],
  fetchingInProgress: true
}

export const REQUEST_IN_PROGRESS = `${ NAMESPACE }/REQUEST_IN_PROGRESS`
export const REQUEST_STATUS_SUCCESS = `${ NAMESPACE }/REQUEST_STATUS_SUCCESS`
export const REQUEST_STATUS_FAIL = `${ NAMESPACE }/REQUEST_STATUS_FAIL`