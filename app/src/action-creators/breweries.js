import { SET_BREWERIES } from '../constants'
import fetch from 'isomorphic-fetch'
const url = process.env.REACT_APP_BASE_URL + '/breweries'

export const setBreweries = async (dispatch, setState) => {
  const breweries = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))

  dispatch({ type: SET_BREWERIES, payload: breweries })
}
