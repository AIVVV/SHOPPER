import React from 'react';
import Layout from './customModules/Layout/Layout-component';
import Wrapper from './customModules/Common/components/Wrapper';

import './customStyles/App.scss';

class App extends React.Component {
    render() {
        return (
            <Wrapper>
                <Layout />
            </Wrapper>
        );
    }
}

export default App;
