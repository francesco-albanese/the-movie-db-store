import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import { NAMESPACE as FORM_NAMESPACE } from '#reducers/forms'
import { NAMESPACE as LOCALES_NAMESPACE, locales } from '#reducers/locales'

export default combineReducers({
  [ FORM_NAMESPACE ] : reduxFormReducer,
  [ LOCALES_NAMESPACE ]: locales
})