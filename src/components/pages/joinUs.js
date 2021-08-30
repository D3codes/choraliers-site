import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import choraliers from '../../images/choraliers2.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(),
    paddingBottom: theme.spacing(10)
  },
  covid: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  image: {
    width: '90%',
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
    maxWidth: '800px'
  },
  map: {
    width: '600px',
    height: '500px',
    maxWidth: '90%',
    maxHeight: 'calc((90vw - 40px) / (6/5))'
  }
}));

const JoinUs = () => {
    const classes = useStyles()

    return (
      <div className={classes.root}>
        <Typography variant="h4">Join the Choraliers</Typography>
        <div className={classes.covid}>
          <Typography variant="h5">We have resumed in-person rehearsals!</Typography>
        </div>
        <img src={choraliers} alt="The Cody Choraliers" className={classes.image} />
        <Typography>The Cody Choraliers are always looking for men to join our ranks. If you enjoy singing and want to be a part of a brotherhood like no other, please consider visiting us during any rehearsal.</Typography>
        <div className={classes.infoContainer}>
          <div>
            <Typography variant="h6">When</Typography>
            <Typography>Monday Evenings</Typography>
            <Typography>7 - 9:30 pm</Typography>
          </div>
          <div>
            <Typography variant="h6">Where</Typography>
            <Typography>The First Presbyterian Church</Typography>
            <Typography>407 Walnut St, Leavenworth, KS</Typography>
          </div>
          <div>
            <iframe
              title="Choraliers Location"
              className={classes.map}
              src="https://maps.google.com/maps?q=407%20Walnut%20St%20Leavenworth,%20KS%2066048&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
          </div>
          <Typography>Call 913-651-SING (7464) with questions or to get directions to our rehearsal venue.</Typography>
        </div>
      </div>
    )
}

export default JoinUs;
