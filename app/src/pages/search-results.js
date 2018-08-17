import React, { Component } from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import BreweryListItems from '../components/BreweryListItems'
import GoogleMapsContainer from '../components/GoogleMapsContainer'
import Geolocation from '../lib/findCurrentLocation'

class SearchResults extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Geolocation />
        <MenuAppBar title="Search Results" />
        <div>
          <GoogleMapsContainer coords={this.props.coords} />
        </div>
        <div style={{ paddingTop: '58vh' }}>
          <BreweryListItems />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentPosition }) => {
  const { coords } = currentPosition
  return { coords }
}

export default connect(
  mapStateToProps,
  {}
)(withDrawer(SearchResults))
