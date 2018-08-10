import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'

const Home = () => (
  <div style={{ padding: 48 }}>
    <MenuAppBar title="Home" />
    <center>
      <img
        style={{ paddingLeft: 30, paddingTop: 150 }}
        alt="home icon"
        src="/frothy-mug_icon.png"
      />
      <div style={{ paddingTop: 30, paddingBottom: 30 }}>
        <Typography variant="display3">Drafty</Typography>
      </div>
      <div style={{ paddingTop: 12 }}>
        <Link to="/search-results" className="no-underline">
          <Button variant="raised" color="primary">
            Find a Brewery
          </Button>
        </Link>
      </div>
    </center>
  </div>
)

export default withDrawer(Home)
