import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'; 
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import LoginPage from './loginpage';
import MainPage from './mainpage';


class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn:true,
    }

    }


  render() {
  return (    
          <Router>
            <switch>
            <Route exact path="/Login" component ={LoginPage} />
            <Route exact path="/Mainpage"  
            render = {props => (
              this.state.loggedIn ?  (<MainPage {...props} />) : (<Redirect to ="/Login" />)
            )} />
            </switch>
          </Router>  
            
          ); 
  }
}

export default App;
