import React, { Component } from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import LoginPage from './loginpage';
import MainPage from './mainpage';
import Register from './register';
import {ProtectedRoute} from './protectedroute';


class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
    }


  render() {
  return (    
          <Router>
            <switch>
            <Route exact path="/" component ={LoginPage} />
            <ProtectedRoute exact path="/Mainpage" component ={MainPage} />
            <Route exact path="/Register" component ={Register} />
            </switch>
          </Router>  
            
          ); 
  }
}

export default App;
