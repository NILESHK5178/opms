// SideBar.js

import React, {Component} from 'react';
import UserLogo from './Nilesh.png';

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
                            <a href="#"><i className="fa fa-circle text-success"></i> {this.props.loggedInStatus} </a>
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