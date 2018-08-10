import { DRAWER_TOGGLED } from '../constants'

const defaultState = {
  open: false
}

export const drawer = (state = defaultState, action) => {
  switch (action.type) {
    case DRAWER_TOGGLED:
      return { open: !state.open }

    default:
      return state
  }
}
