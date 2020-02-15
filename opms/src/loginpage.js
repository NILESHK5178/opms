import React, { Component } from 'react';
import './login.css';
import Logo2 from './company_logo.png';
import Logo1 from './OPMS.png';
import auth from './auth';


class LoginPage extends Component {
  constructor() {
    super();
       this.state = {
      username: '',
      password: '',
      error: '',
      
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.openregister = this.openregister.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  openregister() {
    this.props.history.push("/Register")
  }

  handleSubmit(evt) {
    auth.login(() =>{
      this.props.history.push("/Mainpage")
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
          <img src={Logo1} />
          <br/>
          <h1><label >Operational Parameter Management System</label></h1>
          <br/>
          <h4><label>User Name</label></h4>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
          <br/>
          <h4><label>Password</label></h4>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
          
          <br/>
          <button type="submit" value="Log In" data-test="submit">Log In</button>
          <br/>
          </center>
        </form>

          <center>
          <button onClick={this.openregister}>Register</button>
          </center>
      </div>
    );
  }
}

export default LoginPage;