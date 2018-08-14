import React from 'react'
import Typography from '@material-ui/core/Typography'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import GoogleMapsContainer from '../components/GoogleMapsContainer'

const TestPageMap = () => {
  console.log(JSON.stringify(process.env))
  return (
    <div>
      <MenuAppBar title="Test Page (Map)" />
      <GoogleMapsContainer />
    </div>
  )
}
export default withDrawer(TestPageMap)
