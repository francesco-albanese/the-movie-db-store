import { NAMESPACE } from './pages.const'

export const getAllPages = state => state[ NAMESPACE ].allPages
export const getActivePage = state => state[ NAMESPACE ].activePage
export const getPagesFetchingInprogress = state => state[ NAMESPACE ].fetchingInProgress