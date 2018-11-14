import React from 'react';

import PropTypes from 'prop-types';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import * as Settings from '../../Common/menu-settings';

class WebMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { buttons } = Settings.WebMenu;
    return (
      <Tabs
        className="menu"
        value={this.state.value}
        onChange={this.handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        {buttons.map(button => (
          <Tab className="menu-item" key={button.name} label={button.label} />
        ))}
      </Tabs>
    );
  }
}

WebMenu.propTypes = {};

export default WebMenu;
