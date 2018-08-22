import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'typeface-roboto'
import store from './store'
import { Provider } from 'react-redux'
import { setBreweries } from './action-creators/breweries'
import { getFavorites } from './action-creators/favorites'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
)

store.dispatch(setBreweries)
store.dispatch(getFavorites)
