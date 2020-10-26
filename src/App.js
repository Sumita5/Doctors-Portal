import React, { createContext, useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import 'react-calendar/dist/Calendar.css';
import Appointment from './components/Appointment/Appointment/Appointment';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/appointment">
          <Appointment/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/dashboard/appointment">
            <Dashboard></Dashboard>
          </PrivateRoute>
          {/* <PrivateRoute path="/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute> */}
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
        <Route exact path="/">
            <Home/>
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
