import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import * as Settings from '../../Common/menu-settings';
import Tabs from "@material-ui/core/Tabs/Tabs";

class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            MenuItemValue: null
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
        const open = Boolean(anchorEl);

        return (
            <div>
                <IconButton
                    aria-label="More"
                    aria-owns={open ? 'long-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    color="primary"
                >
                    <MoreVertIcon color="primary" />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                >
                    {buttons.map(button => (
                        <MenuItem className="" key={button.label} value={button.name} onClick={this.handleClose}>
                            {button.name}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

export default MobileMenu;