import React, { Component } from 'react'
import './App.css'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import SearchResults from './pages/search-results'
import Favorites from './pages/favorites'
import CouponWallet from './pages/coupon-wallet'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search-results" component={SearchResults} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/coupon-wallet" component={CouponWallet} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
