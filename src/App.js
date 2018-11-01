import React from 'react';
import Layout from './customModules/Layout/Layout-component';
import Wrapper from './customModules/Common/HOCs/Wrapper';

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
