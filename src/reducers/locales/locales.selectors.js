import { NAMESPACE } from './locales.const'

export const getAllLocales = state => state[ NAMESPACE ].allLocales
export const getActiveLocale = state => state[ NAMESPACE ].activeLocale