import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import bhs from '../../images/bhs.png'
import jerry from '../../images/jerry.png'
import choraliers from '../../images/choraliers4.png'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(),
    paddingBottom: theme.spacing(10)
  },
  who: {
    marginBottom: theme.spacing(3)
  },
  chorus: {
    width: '90%',
    maxWidth: '550px'
  },
  director: {
  },
  jerry: {
    height: '216px'
  },
  bhs: {
    marginTop: theme.spacing(3),
    textAlign: 'center'
  },
  bhsLogo: {
    width: '150px',
    marginTop: theme.spacing()
  }
}));

const About = () => {
    const classes = useStyles()

    return (
      <div className={classes.root}>
        <div className={classes.who}>
          <Typography variant="h4">Who are the Cody Choraliers?</Typography>
          <img className={classes.chorus} src={choraliers} alt="The Cody Choraliers" />
          <Typography>The Leavenworth chapter of the Barbershop Harmony Society is to be an ever growing body of sociable, fun-loving, acapella barbershop style singers who promote and encourage vocal music through social activities, contests, performances (both public & private), and educational opportunities within our local schools.</Typography>
        </div>
        <Typography variant="h4">Our Director</Typography>
        <div className={classes.director}>
          <img className={classes.jerry} src={jerry} alt="Jerry" />
          <Typography>A Kansas City metro native, Jerry's barbershopping career began when he sang in a quartet at Harmony Explosion. That quartet, The Overtones, won first place and solidified his love and passion for four-part barbershop harmony. Along the way his lifelong love for music allowed him to be Director of Music at the First Christian Church of Olathe and to sing with the Kansas City Chorale and Kansas City Symphony Chorus.  Jerry began his barbershop directing experience with Liberty, MO Chapter Sons of Liberty Chorus and has also directed the Heart of America Chorus. Jerry began coaching the Cody Choraliers mid-2008 and was bludgeoned into accepting his current role as Director beginning 2009. His passion for the craft and boundless energy is revitalizing the chapter.  For a demonstration, plan to attend a rehearsal. Jerry resides in Olathe, Ks. And as the story goes, the rest is barbershop history!</Typography>
        </div>
        <div className={classes.bhs}>
          <Typography variant="h5">The Cody Choraliers are proud members of the Barbershop Harmony Society</Typography>
          <a href="https://barbershop.org">
          <img className={classes.bhsLogo} src={bhs} alt="Barbershop Harmony Society" />
          </a>
        </div>
      </div>
    )
}

export default About;
