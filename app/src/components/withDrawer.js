import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/HomeSharp'
import ExploreIcon from '@material-ui/icons/ExploreSharp'
import FavoriteIcon from '@material-ui/icons/FavoriteSharp'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { DRAWER_TOGGLED } from '../constants'

const MenuListItems = props => {
  return (
    <div>
      <div className="row">
        <Typography className="menu-title" variant="display1">
          Menu
        </Typography>
        <img className="menu-tap" src="/beer-tap_icon.png" alt="menu" />
      </div>
      <Divider style={{ marginTop: 10, marginBottom: 10 }} />

      <Link to="/" className="no-underline">
        <ListItem button onClick={props.toggleDrawer}>
          <Avatar>
            <HomeIcon />
          </Avatar>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>

      <Link to="/find-brewery" className="no-underline">
        <ListItem button onClick={props.toggleDrawer}>
          <Avatar>
            <ExploreIcon />
          </Avatar>
          <ListItemText primary="Find a Brewery" />
        </ListItem>
      </Link>

      {/* <Link to="/coupon-wallet" className="no-underline">
        <ListItem button onClick={props.toggleDrawer}>
          <Avatar>
            <AccountBalanceWalletIcon />
          </Avatar>
          <ListItemText primary="Coupon Wallet" />
        </ListItem>
      </Link> */}

      <Link to="/favorites" className="no-underline">
        <ListItem button onClick={props.toggleDrawer}>
          <Avatar style={{ backgroundColor: 'red' }}>
            <FavoriteIcon style={{ color: 'white' }} />
          </Avatar>
          <ListItemText primary="Favorites" />
        </ListItem>
      </Link>
    </div>
  )
}

const withDrawer = function(PageComponent) {
  const WrappedDrawerPageComponent = props => {
    return (
      <div>
        <PageComponent {...props} />

        <Drawer
          open={props.open}
          onClose={props.toggleDrawer}
          anchor="right"
          variant="temporary"
        >
          <div tabIndex={0} role="button">
            {MenuListItems(props)}
          </div>
        </Drawer>
      </div>
    )
  }

  const mapStateToProps = state => {
    return { open: state.drawer.open }
  }

  const mapActionsToProps = dispatch => {
    return {
      toggleDrawer: () => {
        dispatch({ type: DRAWER_TOGGLED })
      }
    }
  }

  const connector = connect(
    mapStateToProps,
    mapActionsToProps
  )

  return connector(WrappedDrawerPageComponent)
}

export default withDrawer
