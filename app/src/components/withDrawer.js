import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import { Link } from 'react-router-dom'

const MenuListItems = (
  <div>
    <Link to="/" className="no-underline">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
  </div>
)

const withDrawer = function(PageComponent) {
  const WrappedDrawerPageComponent = props => {
    return (
      <div>
        <PageComponent {...props} />

        <Drawer open={true} anchor="right" variant="temporary">
          <div tabIndex={0} role="button">
            {MenuListItems}
          </div>
        </Drawer>
      </div>
    )
  }

  return WrappedDrawerPageComponent
}

export default withDrawer
