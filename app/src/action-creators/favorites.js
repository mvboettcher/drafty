import { GET_FAVORITES } from '../constants'
import { find, reject, append } from 'ramda'

export const getFavorites = (dispatch, getState) => {
  const favorites = window.localStorage.getItem('favorites') || '[]'
  dispatch({ type: GET_FAVORITES, payload: JSON.parse(favorites) })
}

export const setFavorite = brewery => (dispatch, getState) => {
  const favExist = find(fav => fav._id === brewery._id, getState().favorites)
    ? true
    : false
  console.log(favExist)
  const newFavorites = favExist
    ? reject(f => f._id === brewery._id, getState().favorites)
    : append(brewery, getState().favorites)
  window.localStorage.setItem('favorites', JSON.stringify(newFavorites))
  dispatch({ type: GET_FAVORITES, payload: newFavorites })
}

/* 
window.localStorage.getItem('favorites') => []

//const newFavorites = append(newFavorite, favorites)
window.localStorage.setItem('favorites', newFavorites) SE

window.localStorage.removeItem() REMOVE


window.localStorage.clear()

*/
