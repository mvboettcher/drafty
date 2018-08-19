import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, ListItemText, List } from '@material-ui/core'
import PlaceIcon from '@material-ui/icons/PlaceSharp'

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
            <ListItem button>
              <PlaceIcon />
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
  return { breweries: state.breweries }
}

export default connect(mapStateToProps)(BreweryListItems)

// import React from 'react'
// import { connect } from 'react-redux'
// import { map, filter, compose } from 'ramda'
// import { Link } from 'react-router-dom'
// import { ListItem, ListItemText, List } from '@material-ui/core'
// import PlaceIcon from '@material-ui/icons/PlaceSharp'
// import { isLessThan2k } from '../lib/isLessThan2k'

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
