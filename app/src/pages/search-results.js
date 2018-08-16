import React from 'react'
import Typography from '@material-ui/core/Typography'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import BreweryListItems from '../components/BreweryListItems'
import GoogleMapsContainer from '../components/GoogleMapsContainer'

const SearchResults = props => {
  // console.log(JSON.stringify(navigator.geolocation))
  return (
    <div>
      <MenuAppBar title="Search Results" />
      <div>
        <GoogleMapsContainer />
      </div>
      <div style={{ paddingTop: '58vh' }}>
        <BreweryListItems />
      </div>
    </div>
  )
}
export default withDrawer(SearchResults)
