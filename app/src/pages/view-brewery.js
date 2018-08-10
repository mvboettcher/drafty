import React from 'react'
import { connect } from 'react-redux'
import { getBrewery } from '../action-creators/breweries'
import { List, ListItem } from '../../node_modules/@material-ui/core'

class ViewBrewery extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getBrewery(id)
  }

  render() {
    const props = this.props

    if (props.id !== this.props.match.params.id) {
      return <h1>Loading Brewery...</h1>
    }

    return (
      <div>
        <h1>{props.name}</h1>
        <List>
          <ListItem>{props.sun}</ListItem>
          <ListItem>{props.mon}</ListItem>
          <ListItem>{props.tue}</ListItem>
          <ListItem>{props.wed}</ListItem>
          <ListItem>{props.thu}</ListItem>
          <ListItem>{props.fri}</ListItem>
          <ListItem>{props.sat}</ListItem>
        </List>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(JSON.stringify(state.brewery))
  return {
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
    website: state.brewery.website
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

export default connector(ViewBrewery)
