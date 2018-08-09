import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import withDrawer from '../components/withDrawer'

const Home = () => (
  <div style={{ padding: 48 }}>
    <center>
      <img
        style={{ paddingLeft: 30 }}
        alt="home icon"
        src="/frothy-mug_icon.png"
      />
      <div style={{ paddingTop: 30, paddingBottom: 30 }}>
        <Typography variant="display3">Drafty</Typography>
      </div>
      <div style={{ paddingTop: 12 }}>
        <Button variant="raised" color="default">
          Find a Brewery
        </Button>
      </div>
    </center>
  </div>
)

export default withDrawer(Home)
