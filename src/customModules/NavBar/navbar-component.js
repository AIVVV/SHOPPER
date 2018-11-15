import React from 'react';

import { isMobile } from 'react-device-detect';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import WebMenu from './components/WebMenu';
import MobileMenu from './components/MobileMenu';
import Notifications from './components/Notifications';

const flexProps = {
    directionRow: 'row',
    justify: 'center',
    alignItems: 'center',
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      const {justify, alignItems, directionRow} = flexProps;

    return (
      <AppBar className="navigation-bar" position="static" color="default">
        <Toolbar variant="default" className="toolbar">
          <Grid container className="grid-container" alignItems={alignItems}>
            <Grid item lg={5} xs={3}>
                <div className="navigation">
                    {isMobile ? <MobileMenu /> : <WebMenu />}
                </div>
            </Grid>
              <Grid item lg={2} xs={6}>
                  <div className="notifications">
                      <Notifications/>
                  </div>
              </Grid>
              <Grid item lg={5} xs={3}>Profile</Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
