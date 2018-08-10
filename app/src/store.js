import { createStore, combineReducers, applyMiddleware } from 'redux'
import { breweries, brewery } from './reducers/breweries'
import { drawer } from './reducers/drawer'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    drawer,
    breweries,
    brewery
  }),
  applyMiddleware(thunk)
)

export default store
