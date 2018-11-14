import React from 'react';

import { isMobile } from 'react-device-detect';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import WebMenu from './components/WebMenu';
import MobileMenu from './components/MobileMenu';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar variant="dense" className="navbar-container">
          <Grid container>
            <Grid item lg={6} md={8} xs={12}>
              {/*<WebMenu />*/}
              <MobileMenu />
            </Grid>
            <Grid item lg={3} md={2} />
            <Grid item lg={3} md={2} />
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
