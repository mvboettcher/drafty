import { createStore, combineReducers, applyMiddleware } from 'redux'
import { breweries } from './reducers/breweries'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    breweries
  }),
  applyMiddleware(thunk)
)

export default store
