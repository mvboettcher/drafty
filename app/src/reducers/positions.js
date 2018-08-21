import {
  // SEARCH_STREET_ADDRESS_UPDATED,
  CURRENT_POSITION,
  CURRENT_POSITION_FAILED
} from '../constants'

const initialState = {
  streetAddress: '',
  coords: null,
  error: ''
}
export const currentPosition = (state = initialState, action) => {
  switch (action.type) {
    // case SEARCH_STREET_ADDRESS_UPDATED:
    //   return { ...state, streetAddress: action.payload }
    // case SEARCH_STREET_ADDRESS_COORDS_UPDATED:
    //   return { ...state, coords: action.payload }
    case CURRENT_POSITION:
      return { ...state, coords: action.payload }
    case CURRENT_POSITION_FAILED:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
