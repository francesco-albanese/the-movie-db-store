import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import { FORM_NAMESPACE } from '#reducers/forms'
import { LOCALES_NAMESPACE, locales } from '#reducers/locales'
import { TEMPLATE_NAMESPACE, template } from '#reducers/template'
import { PAGES_NAMESPACE, pages } from '#reducers/pages'
import { PORTALS_NAMESPACE, portals } from '#reducers/portals'
import { MOVIES_NAMESPACE, movies } from '#reducers/movies'

export default combineReducers({
  [ FORM_NAMESPACE ] : reduxFormReducer,
  [ LOCALES_NAMESPACE ]: locales,
  [ MOVIES_NAMESPACE ]: movies,
  [ PAGES_NAMESPACE ]: pages,
  [ PORTALS_NAMESPACE ]: portals,
  [ TEMPLATE_NAMESPACE ]: template
})