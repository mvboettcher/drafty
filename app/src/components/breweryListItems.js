import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { Link } from 'react-router-dom'
import { ListItem, ListItemText, List } from '@material-ui/core'
import PlaceIcon from '@material-ui/icons/PlaceSharp'

const li = brewery => {
  return (
    <Link to={`/search-results/${brewery._id}`} className="router-link">
      <ListItem button>
        <PlaceIcon />
        <ListItemText
          primary={brewery.name}
          secondary={brewery.location.address}
        />
      </ListItem>
    </Link>
  )
}

const BreweryListItems = props => (
  <div>
    <List>{map(li, props.breweries)}</List>
  </div>
)

const mapStateToProps = state => {
  return { breweries: state.breweries }
}

export default connect(mapStateToProps)(BreweryListItems)
