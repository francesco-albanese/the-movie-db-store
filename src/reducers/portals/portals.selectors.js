import { isEmpty, memoize } from 'lodash-es'
import { createSelector } from 'reselect'

import { NAMESPACE } from './portals.const'

export const getAllPortals = state => state[ NAMESPACE ].allPortals

export const getActivePortal = createSelector(
  [ getAllPortals ],
  allPortals => memoize(name => {
    return isEmpty(allPortals)
      ? {}
      : allPortals.find(portal => portal.name === name)
  })
)
