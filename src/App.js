import React, { useState } from 'react'
import { makeStyles, Snackbar, SnackbarContent, Slide, Button } from '@material-ui/core'
import Navbar from './components/navbar';
import Home from './components/pages/home';
import About from './components/pages/about';
import JoinUs from './components/pages/joinUs';
import Shows from './components/pages/shows';
import Media from './components/pages/media';

const useStyles = makeStyles(theme => ({
  root: {
  },
  snackbar: {
    backgroundColor: '#681160',
    color: '#E7ECEF'
  }
}));

const PAGES = {
  HOME: 0,
  ABOUT: 1,
  JOIN_US: 2,
  SHOWS: 3,
  MEDIA: 4
};

const Site = () => {
    const classes = useStyles()

    const [page, setPage] = useState(0);

    return (
      <div className={classes.root}>
        <Navbar onTabSelect={setPage} />
        {page === PAGES.HOME && <Home />}
        {page === PAGES.ABOUT && <About />}
        {page === PAGES.JOIN_US && <JoinUs />}
        {page === PAGES.SHOWS && <Shows />}
        {page === PAGES.MEDIA && <Media />}
        <Snackbar
          anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
          open={page !== PAGES.JOIN_US}
          onClose={() => {}}
          TransitionComponent={Slide}
        >
          <SnackbarContent
            classes={{root: classes.snackbar}}
            message="Sing With Us!"
            action={
              <Button
                variant="contained"
                size="small"
                onClick={() => {setPage(PAGES.JOIN_US);}}
              >
                Info
              </Button>
            }
          />
        </Snackbar>
      </div>
    )
}

export default Site;
