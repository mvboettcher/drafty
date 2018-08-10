import fetch from 'isomorphic-fetch'
import { SET_BREWERIES } from '../constants'

const url = 'http://localhost:5000/breweries'

export const setBreweries = async (dispatch, getState) => {
  const breweries = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
  dispatch({ type: SET_BREWERIES, payload: breweries })
}
