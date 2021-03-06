import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import PlaceIcon from '@material-ui/icons/Place'
import LanguageIcon from '@material-ui/icons/Language'
import PhoneIcon from '@material-ui/icons/Phone'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddToFavoritesButton from './AddToFavoritesButton'

const styles = theme => ({
  card: {
    maxWidth: 400,
    marginBottom: 30
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
      <div style={{ marginTop: 90 }}>
        <center>
          <Card className={classes.card}>
            <CardHeader title={brewery.name} subheader={brewery.rating} />
            <CardMedia
              className={classes.media}
              image={brewery.image}
              title="mmm...beer..."
            />
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PlaceIcon style={{ color: 'FF965F' }} />
                  </ListItemIcon>
                  <ListItemText secondary={brewery.location.address} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon style={{ color: 'black' }} />
                  </ListItemIcon>
                  <ListItemText secondary={brewery.phone} />
                </ListItem>
                <a
                  href={brewery.website}
                  className="no-underline"
                  target={'_blank'}
                >
                  <ListItem>
                    <ListItemIcon>
                      <LanguageIcon style={{ color: 'black' }} />
                    </ListItemIcon>
                    <ListItemText secondary={brewery.website} />
                  </ListItem>
                </a>
              </List>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <Typography style={{ marginLeft: 34 }} variant="button">
                Hours:
              </Typography>
              <IconButton
                style={{ marginRight: 200 }}
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
              <AddToFavoritesButton brewery={brewery} />
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemText
                      inset={true}
                      primary="Sunday"
                      secondary={brewery.hours.sun}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      inset={true}
                      primary="Monday"
                      secondary={brewery.hours.mon}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      inset={true}
                      primary="Tuesday"
                      secondary={brewery.hours.tue}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      inset={true}
                      primary="Wednesday"
                      secondary={brewery.hours.wed}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      inset={true}
                      primary="Thursday"
                      secondary={brewery.hours.thu}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      inset={true}
                      primary="Friday"
                      secondary={brewery.hours.fri}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      inset={true}
                      primary="Saturday"
                      secondary={brewery.hours.sat}
                    />
                  </ListItem>
                </List>
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
