import React, { Fragment } from 'react';

import Body from './Body';
import Nav from '../Navigation/navigation-container';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Fragment>
                <Nav />
                {/*<Body />*/}
            </Fragment>
        );
    }
}

export default Layout;
