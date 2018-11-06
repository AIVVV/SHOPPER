import React from 'react';

import Body from './Body';
import Nav from '../Navigation/navigation-container';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Nav />
                <Body />
            </div>
        );
    }
}

export default Layout;
