import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';


import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        minWidth: 120,
        maxWidth: 300,
    },
});

const filters = [
    'Filter 1',
    'Filter 2',
    'Filter 3',
    'Filter 4',
    'Filter 5'
];

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            filters: []
        };
    }

    handleChange = event => {
        this.setState({ ...this.state, filters: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <AppBar className="navigation-wrapper" position="static" color="default">
                    <Toolbar>
                        <Grid container spacing={24}>
                            <Grid item xs={6}>
                                <BottomNavigation className="main-menu">
                                    <BottomNavigationAction label="Home" showLabel={true} onClick={this.props.toHome} />
                                    <BottomNavigationAction label="About Us" showLabel={true} onClick={this.props.toAboutUs} />
                                    <BottomNavigationAction label="Support" showLabel={true} onClick={this.props.toSupport} />
                                    <BottomNavigationAction label="Help" showLabel={true} onClick={this.props.toHelp} />
                                    <BottomNavigationAction label="Contact Us" showLabel={true} onClick={this.props.toContactUs} />
                                </BottomNavigation>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="profile-elements">
                                    <div className="bookings-chat-icons-wrapper">
                                        icons here
                                    </div>
                                    <Avatar alt="User's Names" src="/static/images/remy.jpg" className="avatar" />
                                    <div className="user-name-and-status">
                                        User's Names
                                        <div className="online-status">Online</div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <AppBar className="search-wrapper" position="static">
                    <Toolbar>
                        <Grid container spacing={24}>
                            <Grid item xs={2}>
                                Logo / Banner
                            </Grid>
                            <Grid item xs={5}>
                                <div className="search-icon">
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    className="search-input"
                                    placeholder="Search…"
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <FormControl className={classNames(classes.formControl)}>
                                    <Select
                                        multiple
                                        displayEmpty
                                        value={this.state.filters}
                                        onChange={this.handleChange}
                                        input={<Input id="select-multiple-placeholder" />}
                                        renderValue={selected => {
                                            if (selected.length === 0) {
                                                return <em>Filters</em>;
                                            }
                                            return selected.join(', ');
                                        }}
                                    >
                                        <MenuItem disabled value=""><em>Filters</em></MenuItem>
                                        {filters.map(name => (
                                            <MenuItem key={name} value={name}>
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Fragment>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Navigation);