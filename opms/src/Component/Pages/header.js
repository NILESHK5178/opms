// Header.js
import React, {Component} from 'react';
import Logo1 from '../images_logos/OPMS.png';
import '../css/header.css';

const Header = () => {

        return (
            <div>
            <header className="main-header">
                
                <nav className="navbar navbar-static-top">
               
                <div className="position-fixed">
                <a href ="foo" className ="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className ="sr-only">Toggle navigation</span>
                </a>
                </div>
                <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <div>
                            <p className="label" >Operational Parameter Management System</p>    
                            <img style = {{position : 'relative',left :'950%'}} src={Logo1} width="50px" height="50px" />
                            </ div>
                        </ul>
                    </div>
                </nav>
            </header>
            </div>
        )
}

export default Header;