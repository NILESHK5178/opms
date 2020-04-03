// Content.js

import React, {Component} from 'react';
import NewUser from '../Login_component/newuser';
import Register from '../Login_component/register';

export default class Content extends Component {

    componentDidUpdate() {
        console.log(this.props.newuseropen)
        if (this.props.newuseropen === '1'){
        let useropen
        useropen = <NewUser />
        } else {
            let register
            register = <Register /> 
        }
    }

    render(){
        return (
            <div className="content-wrapper">
            {NewUser}
            {Register}
            </div>
        )
    }
}