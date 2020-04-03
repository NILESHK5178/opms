import React, { Component } from 'react';
import '../css/newuser.css';
import axios from 'axios';
import Header from '../Pages/header';
import SideBar from '../Pages/sideBar';

class NewUser extends Component {
  constructor(props) {
    super(props);
       this.state = {
        empid: 0,
        username: '',
        empname: '',
        companyname: '',
        email: '',
        password: '',
        error: '', 
        masterid: 0,
        wstatus: 1
    };

    this.changehandler = this.changehandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit = evt => {
    evt.preventDefault();
    

      if (!this.state.empid) {
        alert('Employee ID is required');
      }
      if (!this.state.empname) {
        alert('Username is required');
      }
      if (!this.state.username) {
        alert('Username is required');
      }
      if (!this.state.companyname) {
        alert('Company Name is required');
      }
      if (!this.state.email) {
        alert('email is required');
      }
      if (!this.state.password) {
        alert('Password is required');
      }
      
      //Insert User
        axios
        .post(`http://localhost:3208/newuser`, this.state)
        .then(response =>{
        })
        .catch(error => {
          alert(error)
        });

        this.props.history.push("/MainPage")
     
  };

  changehandler(evt){
    this.setState({ [evt.target.name]: evt.target.value }); 
  }

 
  render() {
    const {empid, empname, username, companyname, email, password} = this.state
    return (
      <div>
            <Header />
            <SideBar />
            <div className="content-wrapper">
              <form onSubmit={this.handleSubmit}>
                        
                <center>

                <h4><label>Emp ID</label></h4>
                <input type="text" name="empid" data-test="empid" value={empid} onChange={this.changehandler} />

                <h4><label>Emp Name</label></h4>
                <input type="text" name="empname" data-test="empname" value={empname} onChange={this.changehandler} />
                
                <h4><label>User Name</label></h4>
                <input type="text" name="username" data-test="username" value={username} onChange={this.changehandler} />
                
                <h4><label>Company Name</label></h4>
                <input type="text" name="companyname" data-test="companyname" value={companyname} onChange={this.changehandler} />
                
                <h4><label>email</label></h4>
                <input type="text" name="email" data-test="email" value={email} onChange={this.changehandler} />
                
                <h4><label>Password</label></h4>
                <input type="password" name="password" data-test="password" value={password} onChange={this.changehandler} />
                
                             
                <br/>
                <button type="submit">Add User</button>
                </center>
              </form>
            </div>
      </div>
    );
  }
}

export default NewUser;