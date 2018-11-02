import React from 'react';

import Body from './Body';
import Navigation from './Nav';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navigation />
                <Body />
            </div>
        );
    }
}

export default Layout;
