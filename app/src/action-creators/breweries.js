import fetch from 'isomorphic-fetch'
import {
  SET_BREWERIES,
  GET_BREWERY,
  SEARCH_COORDS_FAILED,
  SEARCH_COORDS_UPDATED,
  SEARCH_STREET_ADDRESS_UPDATED
} from '../constants'
import getCurrentPosition from '../lib/getCurrentPosition'
const url = 'http://localhost:5000/breweries'

export const setBreweries = async (dispatch, getState) => {
  const breweries = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))

  dispatch({ type: SET_BREWERIES, payload: breweries })
}

export const getBrewery = id => async (dispatch, getState) => {
  const brewery = await fetch(url + '/' + id)
    .then(res => res.json())
    .catch(err => console.log(err))
  console.log(JSON.stringify(brewery))

  dispatch({ type: GET_BREWERY, payload: brewery })
}

export const findBreweryByCurrentLocation = async (dispatch, getState) => {
  getCurrentPosition((err, position) => {
    if (err) {
      console.log('error getCurrentPosition', err)

      // TODO:  dispatch error to findBrewery reducer with new action type SEARCH_COORDS_FAILED
      return
    }

    dispatch({
      type: SEARCH_COORDS_UPDATED,
      payload: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    })
  })
}
