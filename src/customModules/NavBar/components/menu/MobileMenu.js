import React, { Fragment } from 'react';

import {
  MenuList,
  MenuItem,
  ListItemText,
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import * as Settings from '../../../Common/menu-settings';

const ButtonProps = {
  variant: 'contained',
  ariaLabel: 'menu-button',
  color: 'primary',
};

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      MenuItemValue: null,
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { buttons } = Settings.MobileMenu;
    const { variant, ariaLabel, color } = ButtonProps;
    const open = Boolean(anchorEl);

    return (
      <Fragment>
        <Button
          onClick={this.handleClick}
          variant={variant}
          aria-label={ariaLabel}
          color={color}
        >
          <MenuIcon />
        </Button>
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList className="menu-mobile">
                    {buttons.map(button => (
                      <MenuItem
                        className="menu-item-mobile"
                        key={button.label}
                        value={button.name}
                        onClick={this.handleClose}
                      >
                        <ListItemText className="menu-text-mobile">
                          {button.name}
                        </ListItemText>
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Fragment>
    );
  }
}

export default MobileMenu;
