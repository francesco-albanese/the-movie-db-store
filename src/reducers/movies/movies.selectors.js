import { isEmpty, memoize } from 'lodash-es'
import { createSelector } from 'reselect'

import { NAMESPACE } from './movies.const'

export const getAllMovies = state => state[ NAMESPACE ].allMovies
export const getAllGenres = state => state[ NAMESPACE ].genres
export const getIsFiltering = state => state[ NAMESPACE ].filtering
export const getIsSearching = state => state[ NAMESPACE ].searching
export const getSearchingInProgress = state => state[ NAMESPACE ].searchMoviesInProgress
export const getFilteredMovies = state => state[ NAMESPACE ].filteredMovies
export const getMoviesFetchingInprogress = state => state[ NAMESPACE ].fetchingInProgress
export const getMovieCategory = state => state[ NAMESPACE ].movieCategory
export const getMovieDetails = state => state[ NAMESPACE ].movieDetails

export const filterAllMoviesByGenre = createSelector(
  [ getAllGenres, getAllMovies ],
  (allGenres, allMovies) => {
    if (isEmpty(allGenres) || isEmpty(allMovies)) {
      return {}
    }

    return allMovies.reduce((filteredMovies, movie) => {
      const { genre_ids } = movie

      allGenres.forEach(({ id }) => {

        filteredMovies[ id ] = filteredMovies[ id ] || []

        if (genre_ids.includes(id)) {
          filteredMovies[ id ].push(movie)
        }
      })
    
      return filteredMovies
    }, {})
  }
)

export const filterAllMoviesById = id => createSelector(
  [ getFilteredMovies ],
  filteredMovies => memoize(id => {
    if (isEmpty(filteredMovies)) {
      return []
    }

    return filteredMovies[ id ]
  })
)