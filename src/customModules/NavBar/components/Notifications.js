import React, { Fragment } from 'react';

import { Button, Grid } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import BookIcon from '@material-ui/icons/Book';

const flexProps = {
  directionRow: 'row',
  justify: 'center',
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
    this.state = {};
  }

  render() {
    const { directionRow, alignItems } = flexProps;
    const { variant, size, color } = ButtonProps;

    return (
      <Grid
        container
        className="grid-container"
        direction={directionRow}
        alignItems={alignItems}
      >
        <Grid item xs={6} className="grid-item-center">
          <Button
            className="book-button"
            variant={variant}
            size={size}
            color={color}
          >
            <BookIcon />
          </Button>
        </Grid>
        <Grid item xs={6} className="grid-item-center">
          <Button
            className="message-button"
            variant={variant}
            size={size}
            color={color}
          >
            <MessageIcon />
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default Notifications;
