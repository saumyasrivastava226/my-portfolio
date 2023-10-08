import React from "react";
import { NavLink } from "react-router-dom";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Paper } from "@mui/material";
import { Modal, Button } from "@mui/material";
import Typography from "@material-ui/core/Typography";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#2196F3",
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    marginLeft: theme.spacing(2),
  },
  activeNavLink: {
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent:"right",
    backgroundColor:"yellow",
    
   
  },
  headcontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div className={classes.headcontainer}>
          <div>
            <Typography variant="h6" className={classes.title}>
              Saumya Srivastava
            </Typography>
          </div>
          <div className={classes.container}>
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
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
