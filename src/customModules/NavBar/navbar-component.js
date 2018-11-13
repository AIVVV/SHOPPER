import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import WebMenu from './components/WebMenu'
import * as Setting from '../Common/menu-settings';
import { is_Mobile } from '../Common/helpers';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log(is_Mobile());
        return (
                <AppBar position="static" color="default">
                    <Toolbar className="navbar-container">
                        <Grid container>
                            <Grid item lg={6} md={8} xs={12} style={{backgroundColor: 'red'}}>
                                <WebMenu {...Setting.WebMenu}/>
                            </Grid>
                            <Grid item lg={3} md={2}>

                            </Grid>
                            <Grid item lg={3} md={2}>

                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
        );
    }
}

export default NavBar;
