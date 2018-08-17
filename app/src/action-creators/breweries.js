import fetch from 'isomorphic-fetch'
import { SET_BREWERIES, GET_BREWERY } from '../constants'

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
