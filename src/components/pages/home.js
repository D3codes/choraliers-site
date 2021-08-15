import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import logotext from '../../images/logotext.png'
import choraliers from '../../images/choraliers1.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(),
    textAlign: 'center',
    paddingBottom: theme.spacing(10)
  },
  logotext: {
    width: '50%',
    maxWidth: '670px'
  },
  image: {
    width: '90%',
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
    maxWidth: '1200px'
  }
}));

const Home = () => {
    const classes = useStyles()

    return (
      <div className={classes.root}>
        <img src={logotext} alt="Choraliers logo" className={classes.logotext} />
        <br />
        <img src={choraliers} alt="The Cody Choraliers" className={classes.image} />
        <Typography variant="h5">Two Time CSD Small Chorus Champions!</Typography>
        <Typography>Under the direction of Jerry Garrard, The Cody Choraliers are a small but growing group of men from the Leavenworth area who enjoy performing a cappella music.</Typography>
      </div>
    )
}

export default Home;
