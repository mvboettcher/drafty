import React from 'react'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'

class AddToFavoritesButton extends React.Component {
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  render() {
    return (
      <div>
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              value="checked"
            />
          }
        />
      </div>
    )
  }
}

export default AddToFavoritesButton
