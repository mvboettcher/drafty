import React from 'react'
import Typography from '@material-ui/core/Typography'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import BreweryListItems from '../components/breweryListItems'
import GoogleMapsContainer from '../components/GoogleMapsContainer'

const SearchResults = props => (
  <div>
    <MenuAppBar title="Search Results" />
    <GoogleMapsContainer />
    <div style={{ paddingTop: 430 }}>
      <BreweryListItems />
    </div>
  </div>
)
export default withDrawer(SearchResults)
