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

  // componentDidMount = async () => {
  //   const response = await fetch('http://localhost:3001/')
  //   const users = await response.json()
  // }

  const [currentUser, changeCurrentUser] = useState({})
  // console.log(currentUser)

    return <>
      <Router>
          <Switch>
            <Route path="/dashboard" render={(routeProps) => {
            return (<Dashboard {...routeProps} currentUser={currentUser} replaceUser={changeCurrentUser}/> )
            }}/>

            <Route path="/sign_in" render={(routeProps) => {
            return (<SignIn {...routeProps }replaceUser={changeCurrentUser} />)
            }}/>
            
            <Route path="/sign_up" render={(routeProps) =>{
            return (<SignUp {...routeProps} replaceUser={changeCurrentUser} />)
            }}/>

            <Route path="/" render={(routeProps) => {
            return (<Home {...routeProps}/>)
            }}/>
   
          </Switch>
   
      </Router>
    </>
}

export default App;
