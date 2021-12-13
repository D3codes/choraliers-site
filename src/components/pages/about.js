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
          <Typography>The Cody Choraliers have entertained audiences in the Leavenworth area for over 50 years. Chartered in 1969, they enjoy singing and performing four-part harmony. The chorus competed and won the Central States District Small Chorus Championships in 2011 and again in 2018. Chapter quartets entertain tour groups visiting historic Leavenworth, serenade senior citizens, and deliver Singing Valentines.</Typography>
        </div>
        <Typography variant="h4">Our Director</Typography>
        <div className={classes.director}>
          <img className={classes.jerry} src={jerry} alt="Jerry" />
          <Typography>Jerry Garrard is a native of the Kansas City metro area.  His love affair with Barbershop began as a junior high school student at a Youth In Harmony event — known today as Harmony Explosion — sponsored by the Heart of America Chorus.  That quartet, 'The Overtones' won first place solidifying his passion for barbershop harmony.  Jerry’s lifelong love of music brought him through college as a Music Education major and has allowed opportunities to sing with the Kansas City Chorale and Kansas City Symphony Chorus for several years. Interest in Barbershop takes many different shapes and sizes with Jerry. He’s given back to the hobby by serving as current director for the RiverSong Chorus of St. Joseph, MO and the previous director of the Heart of America Chorus of Kansas City, MO. Top that off with an impressive list of CSD competing quartets including his current foursome, Priorities.</Typography>
          <Typography>Throughout his musical career, Jerry has performed with various ensembles as well as a soloist on the world's leading performing arts center stages—such as Lincoln Center's Avery Fischer Hall and Carnegie Hall directing the Heart of America Chorus and the Barbershop Festival Chorus during his most recent visit to New York City.</Typography>
          <Typography>Unbelievable as it may seem, Jerry still has time outside Barbershop for a rewarding IT profession as a Cloud Architect.  Purely personal pursuits include his continued ambition of proficiency as a private pilot and enjoying his grandchildren.</Typography>
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
