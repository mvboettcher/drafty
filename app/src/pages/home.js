import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'

const Home = () => (
  <div style={{ margin: 48 }}>
    <MenuAppBar title="Home" />
    <center>
      <div style={{ marginTop: 120 }}>
        <img
          style={{ paddingLeft: 30 }}
          alt="drafty icon"
          src="/beer-mug_logo.png"
        />
        <div style={{ paddingTop: 30, paddingBottom: 30 }}>
          <Typography
            variant="display3"
            style={{ fontWeight: 'bold', letterSpacing: 1 }}
          >
            Drafty
          </Typography>
        </div>
        <div>
          <Link to="/find-brewery" className="no-underline">
            <Button
              variant="raised"
              color="primary"
              // style={{ borderRadius: 20 }}
            >
              Find a Brewery
            </Button>
          </Link>
        </div>
        <div style={{ marginTop: 20 }}>
          <Link to="/coupon-wallet" className="no-underline">
            <Button
              variant="raised"
              color="primary"
              // style={{ borderRadius: 20 }}
            >
              Coupon Wallet
            </Button>
          </Link>
        </div>
        <div style={{ marginTop: 20 }}>
          <Link to="/favorites" className="no-underline">
            <Button
              variant="raised"
              color="primary"
              // style={{ borderRadius: 20 }}
            >
              Favorites
            </Button>
          </Link>
        </div>
      </div>
    </center>
  </div>
)

export default withDrawer(Home)
