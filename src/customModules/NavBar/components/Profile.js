import React, { Fragment } from 'react';

import { Avatar, Typography, Grid } from '@material-ui/core';

const src = 'http://sba.scfhs.org.sa/publiceservice_enu/CustomPages/Profileuploader/static/images/default.jpg';

const online = () => (
    <div className="online">
        <Typography>Online</Typography>
    </div>
);

const offline = () => (
    <div className="offline">
        <Typography>Offine</Typography>
    </div>
);

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      avatar: src,
      user: 'Math German',
    };
  }

  render() {
    return (
      <Fragment>
        <div className="elements">
          <Avatar
            className="avatar"
            alt="User Avatar"
            src={this.state.avatar}
          />
          <div className="name-status-wrapper">
            <Typography>{this.state.user}</Typography>
            {this.state.status ? online() : offline()}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Profile;
