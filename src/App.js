import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Login from './pages/Login';
import Location from './pages/Location';
import Appointments from './pages/Appointments';
import MainHeader from './global/MainHeader';


const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact>
        <Login/>
      </Route>
      <Route path="/appointments/:UID" exact>
        <Appointments/>
      </Route>
      <Route path="/locations/:UID" exact>
        <Location/>
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
  <Router>
    <MainHeader/>
    <main>{routes}</main>
  </Router>
  );
}

export default App;
