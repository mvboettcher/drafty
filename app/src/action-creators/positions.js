import { CURRENT_POSITION, CURRENT_POSITION_FAILED } from '../constants'

export const setCurrentLocation = coords => dispatch => {
  dispatch({
    type: CURRENT_POSITION,
    payload: coords
  })
}
