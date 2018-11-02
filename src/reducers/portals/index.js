export { NAMESPACE as PORTALS_NAMESPACE } from './portals.const'
export { 
  fetchAllportals, 
  openPortal, 
  closePortal 
} from './portals.actions'
export { getActivePortal, getAllPortals } from './portals.selectors'
export { default as portals } from './portals.reducer'