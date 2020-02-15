// Header.js
import React, {Component} from 'react';
import Logo1 from './OPMS.png';


export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <header className="main-header">
                
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            
                                <div>
                                
                                <img src={Logo1} width="50px" Height="50px" />
                                
                                </ div>
                                
                            
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}