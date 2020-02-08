import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'; 
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';

class MainPage extends Component {
constructor(props) {
    super(props);
}

    render() {
      return (
       
          <div>
            <Header />
            <SideBar loggedInStatus={this.props.loggedInStatus} />
            <Content />
            
            
          </div>
      );
    }
    }

    export default MainPage;