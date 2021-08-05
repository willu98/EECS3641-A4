import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Login from './pages/Login';
import Location from './pages/Location';
import Appointments from './pages/Appointments';
import Vaccines from './pages/Vaccines';
import MainHeader from './global/MainHeader';
import {AppointmentContext} from './global/Appointment-Context';

const App = () => {

  const [appointment, setAppointment] = useState({
    name:"",
    uID:"",
    lID:"",
    vID:"",
    date:""
  });

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
      <Route path="/vaccines/:UID" exact>
        <Vaccines/>
      </Route>      
      <Redirect to="/" />
    </Switch>
  );

  return (
    <AppointmentContext.Provider
      value={[appointment, setAppointment]}
    >
      <Router>
        <MainHeader />
        <main>{routes}</main>
      </Router>
    </AppointmentContext.Provider>  
  );
}

export default App;
