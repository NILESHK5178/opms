// SideBar.js

import React, { useContext, useState, useEffect } from 'react';
import UserLogo from '../images_logos/nilesh.png';
import { Link } from 'react-router-dom';
import auth from '../Login_component/auth';
import Context from '../store/context';
import axios from 'axios';

const SideBar = () => {
    const {state} = useContext(Context);
    const [value, setValue] = useState( localStorage.getItem('lmasterid') || '');
    const [image, setImage] = useState('');
    const [uname, setUname] = useState('');

    useEffect(() => {
        localStorage.setItem('lmasterid', value);
        axios
      .get(`http://localhost:3208/usersid/${value}`)
      .then((response) => {
        setImage(response.data[0].F6)  
        setUname(response.data[0].F5)
        })
      .catch(error => alert({ error }));  
        }, [value]);

        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                        <img src={image} className="img-circle" alt="" />
                        </div>
                        <div className="pull-left info">
                            <p style = {{fontSize:18}}>{uname}</p>
                            <u style = {{fontSize:14}}><Link onClick ={() => {
                                auth.logout(() => {                                    
                                })
                            }} to= "/">Log out</Link></u>
                        </div>
                    </div>
                
                   <ul className ="sidebar-menu" data-widget="tree">
                    
                        <li style = {{fontSize:18, color:'white'}} className="header">OPMS Menu</li>
            
                        <li className ="treeview">
                            <a href="">
                                <i className="fa fa-industry"></i>
                                <span style = {{fontSize:16}}>   Company Details</span> 
                                <span className ="pull-right-container">
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="/Register"><i className="fa fa-pencil"></i>  New Company</a></li>
                                <li><a href="pages/layout/boxed.html"><i className="fa fa-pencil-square-o"></i>  Update Company</a></li>
                            </ul>
                        </li>

                        <li className ="treeview">
                        <a href="">
                            <i className="fa fa-user-o"></i>
                            <span style = {{fontSize:16}}>   User Details</span>  
                            <span className ="pull-right-container">
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="/NewUser"><i className="fa fa-pencil"></i>  New User</a></li>
                            <li><a href="/UpdateUser"><i className="fa fa-pencil-square-o"></i>  Update User</a></li>
                        </ul>
                        </li>

                        <li className ="treeview">
                        <a href="">
                            <i className="fa fa-files-o"></i>
                            <span style = {{fontSize:16}}>Inventory</span>  
                            <span className ="pull-right-container">
                            </span>
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

export default SideBar;