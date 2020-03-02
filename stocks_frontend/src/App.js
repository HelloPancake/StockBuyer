import React, {useState} from 'react';
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


    return <>
      <Router>
          <Switch>
            <Route path="/dashboard" render={(routeProps) => {
            return (<Dashboard {...routeProps}/> )
            }}/>

            <Route path="/sign_in" render={(routeProps) => {
            return (<SignIn {...routeProps }/>)
            }}/>
            
            <Route path="/sign_up" render={(routeProps) =>{
            return (<SignUp {...routeProps}  />)
            }}/>

            <Route path="/home" render={(routeProps) => {
            return (<Home {...routeProps}/>)
            }}/>
   
          </Switch>
   
      </Router>
    </>
}

export default App;
