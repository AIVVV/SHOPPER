import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// bellow import all reducers
//...


// * unify all reducers to
// * produce a single state object,
// * which holds sub-states. Each
// * sub-state is the result of a
// * particular reducer being called
// * with a given action.

const mainReducer = combineReducers({
    // * @key - representation of substate in
    // * the general state object

    // * @value - the reducer to produce a
    // * particular substate

    login: 'here add login reducer',
    router: routerReducer
});

export default mainReducer;