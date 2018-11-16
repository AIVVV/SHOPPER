import React, { Fragment } from 'react';

import { Button, Grid } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import BookIcon from '@material-ui/icons/Book';
import Badge from '@material-ui/core/Badge';

const flexProps = {
  directionRow: 'row',
  justify: 'flex-end',
  alignItems: 'center',
};

const ButtonProps = {
  variant: 'contained',
  size: 'medium',
  color: 'primary',
};

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        booksNotifications:'1',
        messageNotifications: '2'
    };
  }

  render() {
    const { directionRow, alignItems, justify } = flexProps;
    const { variant, size, color } = ButtonProps;

    return (
      <Grid
        container
        className="grid-container"
        direction={directionRow}
        alignItems={alignItems}
        justify={justify}
      >
        <Grid item xs={6} className="grid-item-center">
          <Badge className="notification-badge" color="secondary" badgeContent={this.state.booksNotifications}>
            <Button
              className="book-button"
              variant={variant}
              size={size}
              color={color}
            >
              <BookIcon />
            </Button>
          </Badge>
        </Grid>
        <Grid item xs={6} className="grid-item-center">
          <Badge className="notification-badge" color="secondary" badgeContent={this.state.messageNotifications}>
            <Button
              className="message-button"
              variant={variant}
              size={size}
              color={color}
            >
              <MessageIcon />
            </Button>
          </Badge>
        </Grid>
      </Grid>
    );
  }
}

export default Notifications;
