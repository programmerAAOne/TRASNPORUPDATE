import React, { Component } from 'react';
  import { render } from 'react-dom';
  import { HashRouter, Switch, Route } from "react-router-dom"
import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Adduser from './components/Adduser/Adduser';
import RouteStepOne from './components/Routes/RouteStepOne';
import RouteList from './components/Routes/RouteList';
import RegisterCompany from './components/Company/RegisterCompany';
import Passengers from './components/Passengers/Passengers'
import './App.css';
import './Utils/APITransport'

class App extends Component{

  render(){
    
    return(
      <HashRouter> 
      <Navbar/>
      <Passengers></Passengers>
    <Switch>
      <Route path="/Home" component={Home} exact />
      <Route path="/Login" component={Login} exact />
      <Route path="/Adduser" component={Adduser} exact />
      <Route path="RouteList" component={RouteList}/>
      <Route path="/RouteStepOne" component={RouteStepOne} exact />
    </Switch>
  </HashRouter>

    )
  }
  
} 

export default App;
