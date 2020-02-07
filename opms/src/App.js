import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'; 
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LoginPage from './loginpage';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';

function App() {
  return (
    /*
    <Router>
      <Route path="/Login" component ={LoginPage} />
    </Router>      
    */
      <div>
        <Header />
        <SideBar />
        <Content />
      </div>
      
  );
}

export default App;
