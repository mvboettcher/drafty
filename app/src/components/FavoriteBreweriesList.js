import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { Link } from 'react-router-dom'
import { ListItem, ListItemText, List } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import AddToFavoritesButton from './AddToFavoritesButton'

const li = brewery => {
  return (
    <div>
      <ListItem>
        <AddToFavoritesButton />
        <Link to="/breweries/:id" className="no-underline">
          <ListItemText
            primary={brewery.name}
            secondary={brewery.location.address}
          />
        </Link>
      </ListItem>
      <Divider inset={true} />
    </div>
  )
}
const FavoriteBreweriesList = props => (
  <div>
    <List>{map(li, props.breweries)}</List>
  </div>
)
const mapStateToProps = state => {
  return { breweries: state.breweries }
}
export default connect(mapStateToProps)(FavoriteBreweriesList)
