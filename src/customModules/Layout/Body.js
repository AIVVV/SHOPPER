import React from 'react';
import { StaticRoutePaths } from '../Common/client-routes';
import { Switch, Route } from 'react-router-dom';
import * as Pages from '../../customPages/Pages';

class Body extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={StaticRoutePaths.LOGIN} render={() => <Pages.LoginPage />}/>
        <Route exact path={StaticRoutePaths.REGISTRATION} render={()=> <Pages.RegistrationPage/>}/>
      </Switch>
    );
  }
}

export default Body;
