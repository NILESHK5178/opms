import React, { useState, useContext} from 'react';
import '../css/login.css';
import Logo1 from '../images_logos/OPMS.png';
import Auth from './auth';
import axios from 'axios';
import Context from '../store/context';


const LoginPage = (props) => {
  const {state, actions} = useContext(Context);

  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

   
  const handleSubmit = (evt) => {  
      evt.preventDefault();

      if (!username) {
        alert('Username is required');
      } else {
              if (!password) {
                alert('Password is required');
              } else {
                        axios
                        .get(`http://localhost:3208/user/${username}/${password}`)
                        .then((response) => {
                              localStorage.setItem('lmasterid', response.data[0].F8)
                              actions({ type: 'setState',  payload: {...state, userimage: response.data[0].F6}})
                              Auth.login(() =>{ props.history.push('/Mainpage')})
                            })
                        .catch(error => 
                              alert('Invalid Username or Password')
                              ); 
                      }  
      }
  }

    return (
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <center>
          <img src={Logo1} />
          <br/>
          <h1><label >Operational Parameter Management System</label></h1>
          <br/>
          <h4><label>User Name</label></h4>
          <input type="text" name="username" data-test="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br/>
          <h4><label>Password</label></h4>
          <input type="password" name="password" data-test="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          
          <br/>
          <button type="submit" value="Log In" data-test="submit">Log In</button>
          <br/>
          </center>
        </form>
      </div>
    );
}

export default LoginPage;