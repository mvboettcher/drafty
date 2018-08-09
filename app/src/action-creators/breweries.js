import fetch from 'isomorphic-fetch'
import { SET_BREWERIES } from '../constants'
const url = process.env.REACT_APP_BASE_URL + '/breweries'

export const setBreweries = async (dispatch, getState) => {
  const breweries = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
  dispatch({ type: SET_BREWERIES, payload: breweries })
}
