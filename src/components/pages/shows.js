import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import bt from '../../images/boomtown1.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing()
  },
  container: {
    textAlign: 'center'
  },
  btContainer: {
    textAlign: 'center'
  },
  btImg: {
    width: '90%',
    maxWidth: '600px'
  },
  infoContainer: {
    textAlign: 'center'
  }
}));

const Shows = () => {
    const classes = useStyles()

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Typography>The Cody Choraliers present:</Typography>
          <Typography variant="h4">2021</Typography>
          <Typography variant="h4">The Comeback Show</Typography>
          <Typography>with the Cody Choraliers chorus, chapter quartets, and featuring Central States District Champion quartet:</Typography>
        </div>
        <div className={classes.btContainer}>
          <Typography variant="h4">BoomTown</Typography>
          <img className={classes.btImg} src={bt} alt="BoomTown Quartet" />
        </div>
        <div className={classes.infoContainer}>
          <div>
            <Typography variant="h6">When</Typography>
            <Typography>August 13 at 7:00 pm</Typography>
          </div>
          <div>
            <Typography variant="h6">Where</Typography>
            <Typography>The Heritage Center</Typography>
            <Typography>109 Delaware Leavenworth, KS</Typography>
          </div>
          <div>
            <Typography variant="h6">Tickets</Typography>
            <Typography>At the Heritage Center 913-682-2122</Typography>
            <Typography>or call 913-651-SING (7464)</Typography>
            <Typography>Adults: $15 | Children: $8</Typography>
          </div>
        </div>
      </div>
    )
}

export default Shows;
