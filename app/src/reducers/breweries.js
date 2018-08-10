import { SET_BREWERIES, GET_BREWERY } from '../constants'

export const breweries = (state = [], action) => {
  switch (action.type) {
    case SET_BREWERIES:
      return action.payload
    default:
      return state
  }
}

const initialBreweryState = {
  id: '',
  name: '',
  location: {
    address: '',
    latitude: '',
    longitude: ''
  },
  hours: {
    mon: '',
    tue: '',
    wed: '',
    thu: '',
    fri: '',
    sat: '',
    sun: ''
  },
  phone: '',
  rating: '',
  website: ''
}

export const brewery = (state = initialBreweryState, action) => {
  switch (action.type) {
    case GET_BREWERY:
      return action.payload
    default:
      return state
  }
}
