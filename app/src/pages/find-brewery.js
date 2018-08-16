import React from 'react'
import Typography from '@material-ui/core/Typography'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import ExploreIcon from '@material-ui/icons/Explore'
import MapIcon from '@material-ui/icons/Map'
import AddressField from '../components/AddressField'
import { findBreweryByCurrentLocation } from '../action-creators/breweries'
import { connect } from 'react-redux'

const FindBrewery = props => (
  <div>
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
        <AddressField />
        <Link to="/search-results" className="no-underline">
          <Button
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
            onClick={props.getCurrentLocation}
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

const mapActionToProps = dispatch => ({
  getCurrentLocation: e => dispatch(findBreweryByCurrentLocation)
})

const connector = connect(
  state => state,
  mapActionToProps
)
export default connector(withDrawer(FindBrewery))
