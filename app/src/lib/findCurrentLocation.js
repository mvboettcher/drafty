import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentLocation } from '../action-creators/positions'

class Geolocation extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.findCurrentLocation()
  }

  findCurrentLocation = () => {
    // let err = {
    //   SNACKBAR
    // }
    if (navigator.geolocation) {
      const timeoutVal = 10 * 1000 * 1000
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log('Position: ', position)
          this.props.setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        },
        null,
        {
          enableHighAccuracy: true,
          timeout: timeoutVal,
          maximumAge: 0
        }
      )
    } else {
      console.log('Geolocation is not supported')
    }
  }

  render() {
    return <div />
  }
}
export default connect(
  null,
  { setCurrentLocation }
)(Geolocation)
