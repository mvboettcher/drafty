import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  input: {
    margin: theme.spacing.unit
  }
})

const AddressField = props => {
  return (
    <div className={props.container}>
      <Input
        placeholder="Street Address"
        className={props.input}
        inputProps={{
          'aria-label': 'Description'
        }}
      />
    </div>
  )
}

export default withStyles(styles)(AddressField)