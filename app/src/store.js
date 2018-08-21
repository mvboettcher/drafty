import { createStore, combineReducers, applyMiddleware } from 'redux'
import { breweries, brewery } from './reducers/breweries'
import { currentPosition } from './reducers/positions'
import { drawer } from './reducers/drawer'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    drawer,
    breweries,
    brewery,
    currentPosition
  }),
  applyMiddleware(thunk)
)

export default store
