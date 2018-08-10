import React from 'react'
import Typography from '@material-ui/core/Typography'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'

const Favorites = () => (
  <div>
    <MenuAppBar title="Favorites" />
  </div>
)
export default withDrawer(Favorites)
