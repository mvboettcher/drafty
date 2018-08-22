import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import { connect } from 'react-redux'
import { find } from 'ramda'
import { setFavorite } from '../action-creators/favorites'

class AddToFavoritesButton extends React.Component {
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  render() {
    const { brewery, saveBreweryAsFavorite, selectedBrewery } = this.props
    return (
      <div>
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder className="heart" />}
              checkedIcon={<Favorite className="heart" />}
              checked={
                this.props.favorites.indexOf(brewery) > -1 ||
                this.props.favorites.indexOf(selectedBrewery) > -1
              }
              onChange={saveBreweryAsFavorite(brewery)}
            />
          }
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('State', state)
  return {
    selectedBrewery: state.brewery,
    id: state.brewery._id,
    favorites: state.favorites
    // checked: find(fav => fav._id === state.brewery._id, state.favorites)
    //   ? true
    //   : false
  }
}

const mapActionsToProps = dispatch => {
  return {
    saveBreweryAsFavorite: brewery => e => dispatch(setFavorite(brewery))
  }
}

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default connector(AddToFavoritesButton)
