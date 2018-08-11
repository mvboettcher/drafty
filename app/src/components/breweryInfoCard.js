import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import FavoriteIcon from '@material-ui/icons/FavoriteBorder'
import PlaceIcon from '@material-ui/icons/PlaceTwoTone'
import LanguageIcon from '@material-ui/icons/LanguageTwoTone'
import PhoneIcon from '@material-ui/icons/PhoneTwoTone'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
})

class BreweryInfoCard extends React.Component {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }

  render() {
    const { classes, brewery } = this.props

    return (
      <div style={{ paddingTop: 100 }}>
        <center>
          <Card className={classes.card}>
            <CardHeader
              title={brewery.name}
              subheader={brewery.location.address}
            />
            <CardMedia
              className={classes.media}
              image="/revelry-bar.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <ListItem>
                <ListItemIcon>
                  <PlaceIcon />
                </ListItemIcon>
                <ListItemText secondary={brewery.location.address} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText secondary={brewery.phone} />
              </ListItem>
              <Link to={brewery.website} className="no-underline">
                <ListItem>
                  <ListItemIcon>
                    <LanguageIcon />
                  </ListItemIcon>
                  <ListItemText secondary={brewery.website} />
                </ListItem>
              </Link>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <Typography style={{ marginLeft: 34 }} variant="button">
                Hours:
              </Typography>
              <IconButton
                style={{ marginRight: 160 }}
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon color="error" />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <ListItem>
                  <ListItemText
                    inset="true"
                    primary="Sunday"
                    secondary={brewery.hours.sun}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset="true"
                    primary="Monday"
                    secondary={brewery.hours.mon}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset="true"
                    primary="Tuesday"
                    secondary={brewery.hours.tue}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset="true"
                    primary="Wednesday"
                    secondary={brewery.hours.wed}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset="true"
                    primary="Thursday"
                    secondary={brewery.hours.thu}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset="true"
                    primary="Friday"
                    secondary={brewery.hours.fri}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset="true"
                    primary="Saturday"
                    secondary={brewery.hours.sat}
                  />
                </ListItem>
              </CardContent>
            </Collapse>
          </Card>
        </center>
      </div>
    )
  }
}

BreweryInfoCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BreweryInfoCard)
