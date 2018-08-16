import { merge } from 'ramda'
import {
  SEARCH_STREET_ADDRESS_UPDATED,
  SEARCH_COORDS_UPDATED,
  SEARCH_COORDS_FAILED
} from '../constants'

// { lat: 32.807076, lng: -79.94501 }
const initialState = {
  streetAddress: '',
  coords: {
    lat: 32.781634,
    lng: -79.985249
  },
  error: null
}
export const findBrewery = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_STREET_ADDRESS_UPDATED:
      return merge(state, { streetAddress: action.payload })
    case SEARCH_COORDS_UPDATED:
      return merge(state, { coords: action.payload })
    case SEARCH_COORDS_FAILED:
      return merge(state, { error: action.payload })
    default:
      return state
  }
}
