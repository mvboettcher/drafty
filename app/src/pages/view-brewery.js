import React from 'react'
import { connect } from 'react-redux'
import { getBrewery } from '../action-creators/breweries'
import BreweryInfoCard from '../components/BreweryInfoCard'
import MenuAppBar from '../components/menuAppBar'
import withDrawer from '../components/withDrawer'

class ViewBrewery extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getBrewery(id)
  }

  render() {
    const props = this.props
    const { brewery } = this.props

    if (props.id !== this.props.match.params.id) {
      return <h1>Loading Brewery...</h1>
    }

    return (
      <div>
        <MenuAppBar />
        <BreweryInfoCard brewery={brewery} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(JSON.stringify(state.brewery))
  return {
    brewery: state.brewery,
    id: state.brewery._id,
    name: state.brewery.name,
    address: state.brewery.location.address,
    sun: state.brewery.hours.sun,
    mon: state.brewery.hours.mon,
    tue: state.brewery.hours.tue,
    wed: state.brewery.hours.wed,
    thu: state.brewery.hours.thu,
    fri: state.brewery.hours.fri,
    sat: state.brewery.hours.sat,
    latitude: state.brewery.location.latitude,
    longitude: state.brewery.location.longitude,
    phone: state.brewery.phone,
    rating: state.brewery.rating,
    website: state.brewery.website,
    image: state.brewery.image
  }
}

const mapActionToProps = dispatch => {
  return {
    getBrewery: id => dispatch(getBrewery(id))
  }
}

const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default connector(withDrawer(ViewBrewery))
