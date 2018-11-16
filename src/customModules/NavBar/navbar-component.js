import React from 'react';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import MenuDrawer from './components/Menu';
import Notifications from './components/Notifications';
import Profile from './components/Profile';

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
    const { alignItems } = flexProps;

    return (
      <AppBar className="navigation-bar" position="static" color="default">
        <Toolbar className="toolbar">
          <Grid container className="grid-container" alignItems={alignItems}>
            <Grid item xs={4}>
              <div className="navigation">
                  <MenuDrawer {...this.props}/>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="notifications">
                <Notifications />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="profile">
                <Profile />
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
