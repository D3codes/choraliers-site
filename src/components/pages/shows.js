import React from 'react'
import { Typography, makeStyles, Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing()
  },
  container: {
    textAlign: 'center'
  },
  infoContainer: {
    textAlign: 'center'
  }
}));

const Shows = () => {
    const classes = useStyles()

    return (
      <div className={classes.root}>
        <div>
          <Typography variant="h4">Upcoming Appearances</Typography>
          <br />
          <div className={classes.infoContainer}>
            <Typography variant="h4">Singing at Worship</Typography>
            <div>
              <Typography variant="h6">When</Typography>
              <Typography>August 29 at 10:30 am</Typography>
            </div>
            <div>
              <Typography variant="h6">Where</Typography>
              <Typography>The First Presbyterian Church</Typography>
              <Typography>407 Walnut St. Leavenworth, KS</Typography>
            </div>
          </div>
          <br />
          <Divider />
          <br />
          <div className={classes.infoContainer}>
            <Typography variant="h4">Holiday Dinner Show</Typography>
            <div>
              <Typography variant="h6">When</Typography>
              <Typography>December 10</Typography>
            </div>
            <div>
              <Typography variant="h6">Where</Typography>
              <Typography>The Heritage Center</Typography>
              <Typography>109 Delaware Leavenworth, KS</Typography>
            </div>
          </div>
          <br />
          <Divider />
          <br />
          <Typography>Check back later for more info!</Typography>
        </div>
      </div>
    )
}

export default Shows;
