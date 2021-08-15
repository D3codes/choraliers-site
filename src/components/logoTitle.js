import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import logo from '../choralierslogo.png'

const useStyles = makeStyles(theme => ({
  root: {
      display: 'flex',
      justifyContent: 'center',
      backgroundImage: `url(${logo})`,
      backgroundRepeat: 'no-repeat, no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '80px'
  },
  textContainer: {
    display: 'flex',
    marginLeft: '54px'
  },
  beginText: {
      color: '#681160',
      marginTop: '52px'
  },
  spacer: {
    width: '46px'
  },
  endText: {
    color: '#681160',
    marginTop: '52px'
}
}));

export default function LogoTitle() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.textContainer}>
                <Typography variant="h3" className={classes.beginText}>The Co</Typography>
                <div className={classes.spacer} />
                <Typography variant="h3" className={classes.endText}>y Choraliers</Typography>
            </div>
        </div>
    )
}
