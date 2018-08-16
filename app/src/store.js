import { createStore, combineReducers, applyMiddleware } from 'redux'
import { breweries, brewery } from './reducers/breweries'
import { findBrewery } from './reducers/findBrewery'
import { drawer } from './reducers/drawer'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    drawer,
    breweries,
    brewery,
    findBrewery
  }),
  applyMiddleware(thunk)
)

export default store
