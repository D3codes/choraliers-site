import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, makeStyles, Menu, MenuItem, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import logo from '../images/choralierslogo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#E7ECEF',
    backgroundColor: '#12212B'
  },
  leftButtons: {
    flexGrow: 1
  },
  centerButton: {
    flexGrow: 1
  },
  logo: {
    height: '40px',
    marginRight: theme.spacing(2)
  },
  title: {
    color: '#E7ECEF'
  },
  rightButtons: {
  },
  menuIcon: {
    color: '#E7ECEF'
  }
}));

const TABS = [
  {
    title: 'About',
    id: 1
  },
  {
    title: 'Join Us',
    id: 2
  },
  {
    title: 'Shows',
    id: 3
  },
  {
    title: 'Media',
    id: 4
  }
];

export default function Navbar({ onTabSelect }) {
    const classes = useStyles()

    let mql;
    if (typeof window !== 'undefined')
    {
      mql = window.matchMedia('(max-width: 650px)');
    }
    const isMobile = mql?.matches;

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar>
            <div className={classes.centerButton}>
              <Button onClick={() => onTabSelect(0)} style={{textTransform: 'none'}}>
                <img src={logo} className={classes.logo} alt="Choraliers logo" />
                {!isMobile && <Typography variant="h5" className={classes.title}>
                  The Cody Choraliers
                </Typography>}
              </Button>
            </div>
            {!isMobile && (
              <div className={classes.rightButtons}>
                <Button onClick={() => onTabSelect(1)} color="inherit">About</Button>
                <Button onClick={() => onTabSelect(2)} color="inherit">Join Us</Button>
                <Button onClick={() => onTabSelect(3)} color="inherit">Shows</Button>
                <Button onClick={() => onTabSelect(4)} color="inherit">Media</Button>
              </div>
            )}
            {isMobile && (
              <div className={classes.menu}>
                <IconButton onClick={handleClick}>
                  <MenuIcon className={classes.menuIcon} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  {TABS.map(tab => 
                    <MenuItem key={`${tab.title}-${tab.id}`} onClick={() => {onTabSelect(tab.id); handleClose();}}>{tab.title}</MenuItem>
                  )}
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <Toolbar />
      </>
    )
}
