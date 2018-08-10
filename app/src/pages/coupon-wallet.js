import React from 'react'
import Typography from '@material-ui/core/Typography'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'

const CouponWallet = () => (
  <div>
    <MenuAppBar title="Coupon Wallet" />
  </div>
)
export default withDrawer(CouponWallet)
