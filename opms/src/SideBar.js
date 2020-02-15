// SideBar.js

import React, {Component} from 'react';
import UserLogo from './Nilesh.png';
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import auth from './auth';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src={UserLogo} className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Nilesh Kulkarni</p>
                            <u><Link onClick ={() => {
                                auth.logout(() => {                                    
                                })
                            }} to= "/">Log out</Link></u>
                        </div>
                    </div>
                    
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">OPMS Menu</li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-files-o"></i>
                                <span>Inventory</span>
                                
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Master Data</a></li>
                                <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Monthly Stock</a></li>
                                <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Item Inward</a></li>
                                <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Item Outward</a></li>
                            </ul>
                        </li>
                        
                        
                        
                        
                        
                    </ul>
                </section>
            </aside> 
        )
    }
}