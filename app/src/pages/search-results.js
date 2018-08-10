import React from 'react'
import Typography from '@material-ui/core/Typography'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'

const SearchResults = () => (
  <div>
    <MenuAppBar title="Search Results" />
  </div>
)
export default withDrawer(SearchResults)
