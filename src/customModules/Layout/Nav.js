import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

class Navigation extends React.Component {

    render() {
        return (
            <div className="navigation-wrapper">
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <ul className="main-menu">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                            <li>
                                <a href="#">Help</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
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
            </div>
        );
    }
}

export default Navigation;