import React from 'react'
import Typography from '@material-ui/core/Typography'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import ExploreIcon from '@material-ui/icons/Explore'
import MapIcon from '@material-ui/icons/Map'
import AddressField from '../components/AddressField'
import { getCurrentLocation } from '../action-creators/positions'
import { connect } from 'react-redux'
import { SEARCH_STREET_ADDRESS_UPDATED } from '../constants'
import Geolocation from '../lib/findCurrentLocation'
import LocationSearchInput from '../components/LocationSearchInput'

const FindBrewery = props => (
  <div>
    <Geolocation />
    <MenuAppBar title="Find a Brewery" />
    <center>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: 150 }}
      >
        <MapIcon
          style={{ transform: `scale(${4})`, padding: 35, color: 'grey' }}
        />
        <ExploreIcon
          style={{ transform: `scale(${4})`, padding: 35, color: 'grey' }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: 150,
          marginRight: 50,
          marginLeft: 50
        }}
      >
        <LocationSearchInput />
        <Link to="/search-results" className="no-underline">
          <Button
            onClick={() => console.log('search for breweries from address...')}
            variant="raised"
            color="primary"
            style={{ marginBottom: 30, marginLeft: 20, borderRadius: 30 }}
          >
            Go!
          </Button>
        </Link>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: 10,
          marginRight: 24,
          marginLeft: 24
        }}
      >
        <Typography
          style={{ paddingTop: 7, fontSize: 15.6, fontWeight: 'bold' }}
        >
          Current Location
        </Typography>
        <Link to="/search-results" className="no-underline">
          <Button
            onClick={() =>
              console.log('search for breweries from current location...')
            }
            variant="raised"
            color="primary"
            style={{ marginBottom: 30, marginLeft: 20, borderRadius: 30 }}
          >
            Go!
          </Button>
        </Link>
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
