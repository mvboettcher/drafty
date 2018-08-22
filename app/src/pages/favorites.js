import React from 'react'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import FavoriteBreweriesList from '../components/FavoriteBreweriesList'
import { connect } from 'react-redux'

const Favorites = () => (
  <div style={{ marginTop: 60 }}>
    <MenuAppBar title="Favorites" />
    <FavoriteBreweriesList />
  </div>
)

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  }
}

const connector = connect(mapStateToProps)

export default withDrawer(connector(Favorites))
