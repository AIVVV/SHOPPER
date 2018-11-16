import React, { Fragment } from 'react';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import * as Settings from '../../Common/menu-settings';

const ButtonProps = {
  variant: 'contained',
  ariaLabel: 'menu-button',
  color: 'primary'
};

class MenuDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleDrawer = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { buttons, menu } = Settings.Menu;
    const { variant, ariaLabel, color } = ButtonProps;
    const {toHome,  } =this.props;
    return (
      <Fragment>
        <Button
          variant={variant}
          area-label={ariaLabel}
          color={color}
          onClick={this.toggleDrawer}
        >
          {menu}
        </Button>
        <Drawer open={this.state.open} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            <div className="navigation">
              <List>
                {buttons.map(button => (
                  <ListItem selected={true} button key={button.label}>
                    <ListItemText primary={button.name} />
                    <Divider />
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        </Drawer>
      </Fragment>
    );
  }
}

export default MenuDrawer;
