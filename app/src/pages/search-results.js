import React, { Component } from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import BreweryListItems from '../components/BreweryListItems'
import GoogleMapsContainer from '../components/GoogleMapsContainer'
import Geolocation from '../lib/findCurrentLocation'

const SearchResults = props => {
  const DisplayMap = props.coords ? (
    <GoogleMapsContainer coords={props.coords} />
  ) : (
    <h2>Loading Map...</h2>
  )

  return (
    <div>
      <Geolocation />
      <MenuAppBar title="Search Results" />
      <div>{DisplayMap}</div>
      <div style={{ paddingTop: '58vh' }}>
        <BreweryListItems />
      </div>
    </div>
  )
}

const mapStateToProps = ({ currentPosition }) => {
  const { coords } = currentPosition

  return { coords }
}

export default connect(
  mapStateToProps,
  {}
)(withDrawer(SearchResults))
