import React from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import * as Settings from '../../Common/menu-settings';

const TabsProps = {
  indicatorColor: 'primary',
  textColor: 'primary',
};

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
    const { indicatorColor, textColor } = TabsProps;
    const { buttons } = Settings.WebMenu;
    return (
      <Tabs
        className="menu-web"
        value={this.state.value}
        onChange={this.handleChange}
        indicatorColor={indicatorColor}
        textColor={textColor}
      >
        {buttons.map(button => (
          <Tab
            className="menu-item-web"
            key={button.name}
            label={button.label}
          />
        ))}
      </Tabs>
    );
  }
}

export default WebMenu;
