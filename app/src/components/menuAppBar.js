import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { DRAWER_TOGGLED } from '../constants'
import { withRouter } from 'react-router'

const styles = theme => ({
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  firstButton: {
    marginLeft: -12,
    marginRight: 12
  },
  lastButton: {
    marginLeft: 12,
    marginRight: -12
  }
})

const MenuAppBar = props => {
  const { classes, history } = props
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Button color="inherit" onClick={e => history.goBack()}>
            <ArrowBackIcon />
          </Button>
          <Typography
            variant="title"
            color="inherit"
            align="center"
            className={classes.flex}
          >
            {props.title}
          </Typography>
          <IconButton
            className={classes.firstButton}
            color="inherit"
            aria-label="Menu"
            onClick={props.toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapActionsToProps = dispatch => {
  return {
    toggleDrawer: () => dispatch({ type: DRAWER_TOGGLED })
  }
}

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default connector(withRouter(withStyles(styles)(MenuAppBar)))
