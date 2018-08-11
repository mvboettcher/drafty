import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/HomeSharp'
import ExploreIcon from '@material-ui/icons/ExploreSharp'
import FavoriteIcon from '@material-ui/icons/FavoriteSharp'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWalletSharp'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { DRAWER_TOGGLED } from '../constants'

const MenuListItems = (
  <div>
    <div className="flex">
      <Typography className="menu-title" variant="display1">
        Menu
      </Typography>
      <img className="menu-tap" src="/beer-tap_icon.png" />
    </div>
    <Divider />

    <Link to="/" className="no-underline">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>

    <Link to="/search-results" className="router-link">
      <ListItem button>
        <ListItemIcon>
          <ExploreIcon />
        </ListItemIcon>
        <ListItemText primary="Find a Brewery" />
      </ListItem>
    </Link>

    <Link to="/coupon-wallet" className="router-link">
      <ListItem button>
        <ListItemIcon>
          <AccountBalanceWalletIcon />
        </ListItemIcon>
        <ListItemText primary="Coupon Wallet" />
      </ListItem>
    </Link>

    <Link to="/favorites" className="router-link">
      <ListItem button>
        <ListItemIcon>
          <FavoriteIcon color="error" />
        </ListItemIcon>
        <ListItemText primary="Favorites" />
      </ListItem>
    </Link>
  </div>
)

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
            {MenuListItems}
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
