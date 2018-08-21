import { CURRENT_POSITION } from '../constants'

export const setCurrentLocation = coords => dispatch => {
  dispatch({
    type: CURRENT_POSITION,
    payload: coords
  })
}
