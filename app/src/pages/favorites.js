import React from 'react'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import FavoriteBreweriesList from '../components/FavoriteBreweriesList'

const Favorites = () => (
  <div style={{ marginTop: 60 }}>
    <MenuAppBar title="Favorites" />
    <FavoriteBreweriesList />
  </div>
)
export default withDrawer(Favorites)
