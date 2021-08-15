import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(),
    textAlign: 'center',
    paddingBottom: theme.spacing(10)
  },
  videoContainer: {
    marginBottom: theme.spacing(2)
  },
  title: {
  },
  video1: {
    width: '1200px',
    maxWidth: '90%',
    height: '675px',
    maxHeight: 'calc((90vw - 40px) / (16/9))'
  },
  video2: {
    width: '1000px',
    maxWidth: '90%',
    height: '800px',
    maxHeight: 'calc((90vw - 40px) / (10/8))'
  }
}));

const Media = () => {
    const classes = useStyles()

    return (
      <div className={classes.root}>
        <div className={classes.videoContainer}>
          <Typography variant="h6" className={classes.title}>2018 CSD Competition</Typography>
          <iframe
            className={classes.video1}
            src="https://www.youtube.com/embed/uG8zzAzZCL8"
            title="2018 CSD Competition"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div className={classes.videoContainer}>
          <Typography variant="h6" className={classes.title}>2010 CSD Competition</Typography>
          <iframe
            className={classes.video2}
            src="https://www.youtube.com/embed/yvFqM6tsBDs"
            title="2010 CSD Competition"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    )
}

export default Media;
