import React from 'react'
import Typography from '@material-ui/core/Typography'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Geolocation from '../lib/findCurrentLocation'
import LocationSearchInput from '../components/LocationSearchInput'

const FindBrewery = props => (
  <div className="column">
    <Geolocation />
    <MenuAppBar title="Find a Brewery" />
    <center>
      <div className="find-header">
        <img alt="map icon" src="/mui-map_icon.png" />
        <img alt="explore icon" src="/mui-explore_icon.png" />
      </div>
      <div>
        <div className="search-go">
          <Typography>Current Location</Typography>
          <Link to="/search-results" className="no-underline">
            <Button
              onClick={() =>
                console.log('search for breweries from current location...')
              }
              variant="raised"
              color="primary"
              className="go-btn"
            >
              Go!
            </Button>
          </Link>
        </div>
        <div className="search-go">
          <LocationSearchInput />
          <Link to="/search-results" className="no-underline">
            <Button
              onClick={() =>
                console.log('search for breweries from address...')
              }
              variant="raised"
              color="primary"
              className="go-btn"
            >
              Go!
            </Button>
          </Link>
        </div>
      </div>
    </center>
  </div>
)

const mapActionToProps = dispatch => ({})

const connector = connect(
  state => state,
  mapActionToProps
)
export default connector(withDrawer(FindBrewery))
