import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { Link } from 'react-router-dom'
import { ListItem, ListItemText, List } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import AddToFavoritesButton from './AddToFavoritesButton'

const li = brewery => {
  return (
    <div key={brewery._id}>
      <ListItem>
        <AddToFavoritesButton brewery={brewery} />
        <Link to={`/search-results/${brewery._id}`} className="no-underline">
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
    {props.favorites.length > 0 ? (
      <List>{map(li, props.favorites)}</List>
    ) : (
      <div
        style={{
          marginTop: 120,
          padding: 50,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Typography align="center" variant="display1">
            Favorite something already!
          </Typography>
        </div>
      </div>
    )}
  </div>
)
const mapStateToProps = state => {
  return { favorites: state.favorites }
}
export default connect(mapStateToProps)(FavoriteBreweriesList)
