import React from 'react'
import { Typography, makeStyles, Divider } from '@material-ui/core'
import xmas from '../../images/xmastree.png'
import riversong from '../../images/riversong.png'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(),
    paddingBottom: theme.spacing(10)
  },
  container: {
    textAlign: 'center'
  },
  infoContainer: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  image: {
    width: '90%',
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
    maxWidth: '700px'
  },
  imageNarrow: {
    width: '90%',
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
    maxWidth: '200px'
  }
}));

const Shows = () => {
    const classes = useStyles()

    return (
      <div className={classes.root}>
        <div>
          <Typography variant="h4">Upcoming Appearances</Typography>
          <div className={classes.infoContainer}>
            <Typography variant="h4">The Cody Choraliers Present:</Typography>
            <Typography variant="h4">2021 Holiday Dinner and Show</Typography>
            <Typography variant="h5">with the St. Joseph RiverSong Chorus</Typography>
            <img src={xmas} alt="Christmas Tree" className={classes.imageNarrow} />
            <div>
              <Typography variant="h6">When</Typography>
              <Typography>December 10 @ 6:30pm</Typography>
            </div>
            <div>
              <Typography variant="h6">Where</Typography>
              <Typography>The Heritage Center</Typography>
              <Typography>109 Delaware, Leavenworth, KS</Typography>
            </div>
            <div>
              <Typography variant="h6">Tickets</Typography>
              <Typography>Adults $20 | Children $10</Typography>
              <Typography>Call 913-682-2122 or 913-651-7464</Typography>
            </div>
          </div>
          <Divider />
          <div className={classes.infoContainer}>
            <Typography variant="h4">RiverSong Chorus Holiday Show</Typography>
            <img src={riversong} alt="The RiverSong Chorus" className={classes.image} />
            <div>
              <Typography variant="h6">When</Typography>
              <Typography>December 12 @ 4:30pm</Typography>
            </div>
            <div>
              <Typography variant="h6">Where</Typography>
              <Typography>Wyatt Park Christian Church</Typography>
              <Typography>2623 Mitchell Ave, St. Joseph, MO</Typography>
            </div>
          </div>
          <Divider />
          <Typography>Check back later for more info!</Typography>
        </div>
      </div>
    )
}

export default Shows;
