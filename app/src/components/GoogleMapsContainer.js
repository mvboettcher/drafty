import React from 'react'
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { filter, equals, always } from 'ramda'
import { isLessThan4mi } from '../lib/getDistance'

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: always(false),
      activeMarker: {},
      selectedPlace: {}
    }
  }
  onMarkerClick = breweryID => (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: equals(breweryID)
    })
  }
  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: always(false),
        activeMarker: null
      })
    }
  }

  render() {
    const style = {
      width: '100%',
      height: '50vh',
      marginTop: 60
    }
    console.log('COOORDS: ', this.props.coords)

    return (
      <Map
        item
        xs={12}
        style={style}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={13}
        initialCenter={{
          lat: this.props.coords.lat,
          lng: this.props.coords.lng
        }}
      >
        <Marker
          onClick={this.onMarkerClick('current location')}
          title={'Current Location'}
          position={{
            lat: this.props.coords.lat,
            lng: this.props.coords.lng
          }}
          name={'Current Location'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow('current location')}
        >
          <Paper>
            <Typography variant="headline" component="h4">
              Current Position
            </Typography>
            <Typography component="p">You are here!</Typography>
          </Paper>
        </InfoWindow>
        {this.props.breweries.map((brewery, idx) => {
          return (
            <Marker
              key={brewery._id}
              onClick={this.onMarkerClick(brewery._id)}
              title={brewery.name}
              position={{
                lat: brewery.location.latitude,
                lng: brewery.location.longitude
              }}
              name={brewery.name}
              icon={{
                url: '/beer-glass_pin.png'
              }}
            />
          )
        })}
        {this.props.breweries.map((brewery, idx) => {
          return (
            <InfoWindow
              key={brewery._id}
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow(brewery._id)}
            >
              <Paper>
                <Typography variant="headline" component="h4">
                  {brewery.name}
                </Typography>
                <Typography component="p">
                  {brewery.location.address}
                </Typography>
              </Paper>
            </InfoWindow>
          )
        })}
      </Map>
    )
  }
}

const mapStateToProps = state => {
  return {
    breweries: state.currentPosition.coords
      ? filter(isLessThan4mi(state.currentPosition.coords), state.breweries)
      : []
  }
}

const connector = connect(mapStateToProps)

export default connector(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })(GoogleMapsContainer)
)
