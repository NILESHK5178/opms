import React, { Component } from 'react';
import './register.css';
import auth from './auth';



class LoginPage extends Component {
  constructor() {
    super();
       this.state = {
      username: '',
      cname: '',
      email: '',
      password: '',
      cpassword: '',
      image: '',
      cimage: '',
      error: '',  
    };

      

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    
    
   
  
    auth.login(() =>{
      this.props.history.push("/")
    });
    

    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
    
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h5 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h5>
          }
          
          <center>
          <br/>
          <h1><label >Operational Parameter Management System</label></h1>
          
          <br/>
          <h4><label>User Name</label></h4>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
          
          <h4><label>Company Name</label></h4>
          <input type="text" data-test="companyname" value={this.state.cname} onChange={this.handleUserChange} />
          
          <h4><label>email</label></h4>
          <input type="text" data-test="email" value={this.state.email} onChange={this.handleUserChange} />
          
          <h4><label>Password</label></h4>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
          
          <h4><label>Confirm Password</label></h4>
          <input type="password" data-test="password" value={this.state.cpassword} onChange={this.handlePassChange} />
          
          <h4><label>Image</label></h4>
          <input type="text" data-test="simage" value={this.state.password} onChange={this.handlePassChange} />
          <button className="uploadbtn">upload</button>
          <br/><br/>
          <h4><label>Company Image</label></h4>
          <input type="text" data-test="cimage" value={this.state.password} onChange={this.handlePassChange} />
          <button className="uploadbtn">upload</button>
          <br/><br/>
          <br/>
          <button >Register</button>
          </center>
        </form>

      </div>
    );
  }
}

export default LoginPage;