import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../css/App.css'; 
import Header from './header';
import SideBar from './sideBar';
import Content from './content';

class MainPage extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

    render() {
      return (
          <div>
            <Header  />
            <SideBar />
            <Content />    
            {/*userimage= {this.props.location.state.userimage}   */}     
          </div>
      );
    }
    }

    export default MainPage;