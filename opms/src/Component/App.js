import React, { useReducer, Fragment }  from 'react';
import '../Component/css/App.css'; 
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './Login_component/loginpage';
import MainPage from './Pages/mainpage';
import NewUser from './Login_component/newuser';
import Register from './Login_component/register';
import UpdateUser from './Login_component/updateuser';
import {ProtectedRoute} from './protectedroute';


const initialState = '/uploads/Blank'
const reducer = (state, action) => {
    switch(action) {
        case !null:
            return action;
        default:
            return state;
    }
}

function App() {

return (
    
    <div>
        <Fragment>
          <Router>
            <Switch>
            <Route exact path="/" component ={LoginPage} />
            <ProtectedRoute exact path="/Mainpage" component ={MainPage} />
            <ProtectedRoute exact path="/NewUser" component ={NewUser} />
            <ProtectedRoute exact path="/Register" component ={Register} />
            <ProtectedRoute exact path="/UpdateUser" component ={UpdateUser} />
            </Switch>
          </Router>  
        </Fragment> 
    </div>
)}
export default App;
