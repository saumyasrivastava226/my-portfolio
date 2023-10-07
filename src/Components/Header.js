import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#2196F3', // Customize the background color
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    color: 'white', // Customize the link color
    textDecoration: 'none',
    marginLeft: theme.spacing(2), // Add some spacing between links
  },
  activeNavLink: {
    fontWeight: 'bold', // Customize the active link style
  },
}));

export function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Your Name
        </Typography>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                className={classes.navLink}
                activeClassName={classes.activeNavLink}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={classes.navLink}
                activeClassName={classes.activeNavLink}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={classes.navLink}
                activeClassName={classes.activeNavLink}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
