import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'; 
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LoginPage from './loginpage';
import MainPage from './mainpage';


class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "Log In",
      user: {}
    }
  }

  render() {
  return (    
          <Router>
            <switch>
            <Route exact path="/Login" component ={LoginPage} />
            <Route exact path="/Mainpage" 
              render={props => (
                <MainPage {...props} loggedInStatus={this.state.loggedInStatus} />
              )}
            />
            </switch>
          </Router>  
            
          ); 
  }
}

export default App;
