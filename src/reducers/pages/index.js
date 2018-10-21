export { NAMESPACE } from './pages.const'
export { fetchAllPages, setActivePage } from './pages.actions'
export { 
  getAllPages, 
  getActivePage,
  getPagesFetchingInprogress
} from './pages.selectors'
export { default as pages } from './pages.reducer'