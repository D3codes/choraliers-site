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
          </div>
          <Divider />
          <Typography>Check back later for more info!</Typography>
        </div>
      </div>
    )
}

export default Shows;
