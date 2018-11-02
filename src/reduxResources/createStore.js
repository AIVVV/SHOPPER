import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
// import { createEpicMiddleware } from 'redux-observable';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import rootReducer from './mainReducer';

const connectRouterToRootReducer = history => connectRouter(history)(rootReducer);

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose;

const enhancer = history => composeEnhancers(
    applyMiddleware(
        routerMiddleware(history),
        promiseMiddleware,
        thunkMiddleware
        // also add createEpicMiddleware with mainEpic file
    )
);

const initStore = history => createStore(connectRouterToRootReducer(history), enhancer(history));

export default initStore;
