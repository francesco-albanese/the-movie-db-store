import { 
  INITIAL_STATE, 
  REQUEST_IN_PROGRESS,
  REQUEST_STATUS_SUCCESS, 
  REQUEST_STATUS_FAIL,
  OPEN,
  CLOSE
} from './portals.const'

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
        allPortals: action.payload,
        fetchingInProgress: false
      }

    case OPEN:
    case CLOSE:
      return {
        ...state,
        allPortals: action.payload
      }

    default:
      return state
  }
}