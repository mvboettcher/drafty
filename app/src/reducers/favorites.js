import { GET_FAVORITES, FAVORITE_ADDED, FAVORITE_REMOVED } from '../constants'

export const favorites = (state = [], action) => {
  switch (action.type) {
    case GET_FAVORITES:
      return action.payload
    default:
      return state
  }
}
