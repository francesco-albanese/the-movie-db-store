import { 
  INITIAL_STATE, 
  REQUEST_IN_PROGRESS,
  REQUEST_STATUS_SUCCESS, 
  REQUEST_STATUS_FAIL 
} from './locales.const'

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case REQUEST_IN_PROGRESS:
      return {
        ...state,
        fetchingInProgress: true
      }

    case REQUEST_STATUS_FAIL:
      return {
        ...state,
        errors: [ ...state.errors, action.error ],
        fetchingInProgress: false
      }

    case REQUEST_STATUS_SUCCESS:
      return {
        ...state,
        allLocales: action.payload,
        fetchingInProgress: false
      }

    default:
      return state
  }
}