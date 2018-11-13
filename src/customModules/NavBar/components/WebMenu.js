import React from 'react';

import { MenuList, MenuItem } from '@material-ui/core';
import  ListItemText from '@material-ui/core/ListItemText';

class WebMenu extends React.Component {
    render() {

        const { buttons } = this.props;
        return(
            <MenuList className="menu clearfix">
                {buttons.map( button => (
                    <MenuItem key={button.label} className='menu-item'>
                        <ListItemText inset primary={button.name} className='menu-text'/>
                    </MenuItem>
                ))};
            </MenuList>
        )
    }
}

export default WebMenu;