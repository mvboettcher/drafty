import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { filter } from 'ramda'
import { ListItem, ListItemText, List, Typography } from '@material-ui/core'
import PlaceIcon from '@material-ui/icons/PlaceSharp'
import { isLessThan4mi, getDistanceFromLatLongInMi } from '../lib/getDistance'

const BreweryListItems = props => (
  <div>
    <List>
      {props.breweries.map((brewery, idx) => {
        return (
          <Link
            key={idx}
            to={`/search-results/${brewery._id}`}
            className="router-link"
          >
            <ListItem button divider={true}>
              <PlaceIcon style={{ color: 'FF965F' }} />
              <Typography color="textSecondary">
                {`${getDistanceFromLatLongInMi(
                  props.coords.lat,
                  props.coords.lng,
                  brewery.location.latitude,
                  brewery.location.longitude
                ).toFixed(1)} mi`}
              </Typography>
              <ListItemText
                primary={brewery.name}
                secondary={brewery.location.address}
              />
            </ListItem>
          </Link>
        )
      })}
    </List>
  </div>
)

const mapStateToProps = state => {
  return {
    breweries: state.currentPosition.coords
      ? filter(isLessThan4mi(state.currentPosition.coords), state.breweries)
      : [],
    coords: state.currentPosition.coords
  }
}

export default connect(mapStateToProps)(BreweryListItems)

// import React from 'react'
// import { connect } from 'react-redux'
// import { map, filter, compose } from 'ramda'
// import { Link } from 'react-router-dom'
// import { ListItem, ListItemText, List } from '@material-ui/core'
// import PlaceIcon from '@material-ui/icons/PlaceSharp'
// import { isLessThan3k } from '../lib/isLessThan3k

// const li = brewery => {
//   return (
//     <Link to="/breweries/:id" className="router-link">
//       <ListItem button>
//         <PlaceIcon />
//         <ListItemText
//           primary={brewery.name}
//           secondary={brewery.location.address}
//         />
//       </ListItem>
//     </Link>
//   )
// }
// const BreweryListItems = props => (
//   <div>
//     <List>
//       {map(li, props.breweries)}
//     </List>
//   </div>
// )
// const mapStateToProps = state => {
//   return { breweries: state.breweries }
// }
// export default connect(mapStateToProps)(BreweryListItems)
