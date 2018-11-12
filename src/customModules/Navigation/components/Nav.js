import React from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



export const WebNav = ({ nav, buttons }) => (
    <Tabs value={nav.value} onChange={nav.active} indicatorColor={nav.lineColor} textColor={nav.textColor} fullWidth>
        {buttons.map(button => {
            return <Tab key={button.label} label={button.label} onClick={button.clickHandler} />;
        })}
    </Tabs>
);
