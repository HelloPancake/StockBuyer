import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home';
import SignIn from './components/sign_in';
import SignUp from './components/sign_up';
import Dashboard from './components/dashboard';

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
