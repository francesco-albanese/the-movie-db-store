import { NAMESPACE } from './template.const'

export const getAllTemplates = state => state[ NAMESPACE ].allTemplates
export const getTemplatesFetchingInprogress = state => state[ NAMESPACE ].fetchingInProgress