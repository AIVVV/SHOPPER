import React from 'react';

import Body from './Body';
// import Nav from '../Navigation/navigation-container';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                {/*<Nav />*/}
                <Body />
            </div>
        );
    }
}

export default Layout;
