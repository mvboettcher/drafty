import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import { connect } from 'react-redux'

const Home = () => (
  <div>
    <MenuAppBar title="Home" />

    <div className="home-container">
      <img
        style={{ paddingLeft: 30 }}
        alt="drafty icon"
        src="/beer-mug_logo.png"
      />
      <div>
        <Typography
          variant="display3"
          style={{ fontWeight: 'bold', letterSpacing: 1, margin: 10 }}
        >
          Drafty
        </Typography>
      </div>
      <div className="home-btns">
        <Link to="/find-brewery" className="no-underline">
          <Button variant="raised" color="primary">
            Find a Brewery
          </Button>
        </Link>

        <Link to="/coupon-wallet" className="no-underline">
          <Button variant="raised" color="primary">
            Coupon Wallet
          </Button>
        </Link>

        <Link to="/favorites" className="no-underline">
          <Button variant="raised" color="primary">
            Favorites
          </Button>
        </Link>
      </div>
    </div>
  </div>
)

const mapActionToProps = dispatch => ({})

const connector = connect(
  state => state,
  mapActionToProps
)

export default connector(withDrawer(Home))
