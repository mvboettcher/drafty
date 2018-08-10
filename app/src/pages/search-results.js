import React from 'react'
import Typography from '@material-ui/core/Typography'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import BreweryListItems from '../components/breweryListItems'

const SearchResults = props => (
  <div style={{ paddingTop: 400 }}>
    <MenuAppBar title="Search Results" />
    <BreweryListItems />
  </div>
)
export default withDrawer(SearchResults)
