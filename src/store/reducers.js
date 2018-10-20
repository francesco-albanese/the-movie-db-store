import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import { NAMESPACE as FORM_NAMESPACE } from '#reducers/forms'
import { NAMESPACE as LOCALES_NAMESPACE, locales } from '#reducers/locales'
import { NAMESPACE as TEMPLATE_NAMESPACE, template } from '#reducers/template'
import { NAMESPACE as PAGES_NAMESPACE, pages } from '#reducers/pages'

export default combineReducers({
  [ FORM_NAMESPACE ] : reduxFormReducer,
  [ LOCALES_NAMESPACE ]: locales,
  [ PAGES_NAMESPACE ]: pages,
  [ TEMPLATE_NAMESPACE ]: template
})