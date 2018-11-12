import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';

import Layout from './customModules/Layout/Layout-component';
import initStore from './reduxResources/createStore';

import './customStyles/App.scss';
import './customStyles/navigation.scss';

const history = createHistory();
const store = initStore(history);

export default function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Layout />
            </ConnectedRouter>
        </Provider>
    );
}