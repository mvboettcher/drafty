import React from 'react'
import { connect } from 'react-redux'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import BreweryListItems from '../components/BreweryListItems'
import GoogleMapsContainer from '../components/GoogleMapsContainer'

const SearchResults = props => {
  const DisplayMap = props.coords ? (
    <GoogleMapsContainer coords={props.coords} />
  ) : (
    <h2>Loading Map...</h2>
  )

  return (
    <div>
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
