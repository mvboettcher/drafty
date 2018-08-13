import React from 'react'
import Typography from '@material-ui/core/Typography'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const FindBrewery = () => (
  <div style={{ margin: 150 }}>
    <MenuAppBar title="Find a Brewery" />
    <center>
      <div>
        <Link to="/search-results" className="no-underline">
          <Button variant="raised" color="primary">
            Find a Brewery
          </Button>
        </Link>
      </div>
    </center>
  </div>
)
export default withDrawer(FindBrewery)
