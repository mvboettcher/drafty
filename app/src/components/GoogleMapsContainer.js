import React from 'react'
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }
  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
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
          onClick={this.onMarkerClick}
          title={'Current Location'}
          position={{
            lat: this.props.coords.lat,
            lng: this.props.coords.lng
          }}
          name={'Current Location'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <Paper>
            <Typography variant="headline" component="h4">
              Revelry Brewing Co. {/* brewery.name */}
            </Typography>
            <Typography component="p">
              10 Conroy St, Charleston, SC 29403 {/* brewery.address */} <br />
              (843) 203-6194 {/* brewery.phone */}
            </Typography>
          </Paper>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(GoogleMapsContainer)
