import React from 'react';
import { Switch } from 'react-router-dom';

import Login from '../pages/Login'
import Route from './Route';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      {/* <Route path="/register" exact component={SignUp} /> */}

      {/* <Route path="/dashboard" isPrivate component={Dashboard} /> */}
      {/* <Route path="/profile" isPrivate component={Profile} /> */}
    </Switch>
  );
}

export default Routes;