import { isEmpty, memoize } from 'lodash-es'
import { createSelector } from 'reselect'

import { NAMESPACE } from './movies.const'

export const getAllMovies = state => state[ NAMESPACE ].allMovies
export const getAllGenres = state => state[ NAMESPACE ].genres
export const getIsFiltering = state => state[ NAMESPACE ].filtering
export const getFilteredMovies = state => state[ NAMESPACE ].filteredMovies
export const getMoviesFetchingInprogress = state => state[ NAMESPACE ].fetchingInProgress
export const getMovieCategory = state => state[ NAMESPACE ].movieCategory

export const filterAllMoviesByGenre = filterId => createSelector(
  [ getAllMovies ],
  (allMovies) => memoize(filterId => {
    return isEmpty(allMovies) 
      ? []
      : allMovies.reduce((filteredMovies, movie) => {
        const { genre_ids } = movie

        if (genre_ids.includes(filterId)) {
          filteredMovies.push(movie)
        }

        return filteredMovies

      }, [])
  })
)