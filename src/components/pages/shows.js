import React from 'react'
import { Typography, makeStyles, Divider } from '@material-ui/core'
import { shows } from '../../data/showData.json'

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
  }
}));

const Shows = () => {
    const classes = useStyles()

    return (
      <div className={classes.root}>
        <div>
          <Typography variant="h4">Upcoming Appearances</Typography>
          {shows.map(show =>
            <>
              <div className={classes.infoContainer}>
                <Typography variant="h4">{show.title}</Typography>
                <div>
                  <Typography variant="h6">When</Typography>
                  <Typography>{show.when}</Typography>
                </div>
                <div>
                  <Typography variant="h6">Where</Typography>
                  <Typography>{show.where.location}</Typography>
                  <Typography>{show.where.address}</Typography>
                </div>
              </div>
              <Divider />
            </>
          )}
          <Typography>Check back later for more info!</Typography>
        </div>
      </div>
    )
}

export default Shows;
