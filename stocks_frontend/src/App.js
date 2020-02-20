import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/home.js';
import SignIn from './components/home/sign_in.js';
import SignUp from './components/home/sign_up.js';
import Dashboard from './components/dashboard/dashboard.js';

function App(){

  // componentDidMount = async () => {
  //   const response = await fetch('http://localhost:3001/')
  //   const users = await response.json()
  // }

    return(
      <Router>
        <div>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/sign_in">
              <SignIn />
            </Route>
            <Route path="/sign_up">
              <SignUp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    )
}

export default App;
