import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Pages/header';
import SideBar from '../Pages/sideBar';
import Popup from './userupdatepopup';
import '../css/table.css';

class updateuser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            usersCollection: [],
            companyname: 'Obeikan Glass Company',
            showPopup: false,
            id:0
        };

            this.pagerefresh = this.pagerefresh.bind(this);
    }
    
componentDidMount() {
    axios
    .get(`http://localhost:3208/users/${this.state.companyname}`)
    .then((response) => {
        this.setState({ usersCollection: response.data  });
     })
    .catch(error => alert({ error }));  

    const script = document.createElement("script");
        script.src = 'dist/js/content.js';
        script.async = true;
        document.body.appendChild(script);

}

togglePopup(person){
    this.setState({
      showPopup: !this.state.showPopup,
      id: person
    });
  }

onClickDisable(person){
axios
    .put(`http://localhost:3208/userdisable/${person}`)
    .then((response) => {})
    .catch(error => alert({ error }));     

this.pagerefresh()
}

pagerefresh(){
    window.location.reload();
}

    render() {
        return (
            <div>
                <Header />
                <SideBar />
                    
                <div className="content-wrapper">

                        {/* Content Header (Page header) */}
                        <section className ="content-header">
                        <h1 className = "tableheader">
                            User Tables
                            <small></small>
                        </h1>
                        <ol className ="breadcrumb">
                            <li><a href="foo"><i className ="fa fa-dashboard"></i> Home</a></li>
                            <li><a href="foo">User Data Updata</a></li>
                            <li className ="active">User Data Table</li>
                        </ol>
                        </section>

                        {/* Main content */}
                        <section className ="content">
                            <div className ="row">
                                <div className ="col-xs-12">
                                <div className ="box">
                                
                                    {/* /.box-header */}
                                    <div className ="box-body">
                                    <table id="example2" className ="table table-bordered table-hover" >
                                        <thead>
                                        <tr className="tableheading">
                                        <th>Emp ID</th>
                                        <th>User Name</th>
                                        <th>User ID</th>
                                        <th>Email</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                        </tr>
                                        </thead>

                                        {/* /.box-data */}
                                        <tbody className="tabledata">
                                        { this.state.usersCollection.map((person,i) => 
                                            <tr key={i}>
                                                <td>{person.F0}</td>
                                                <td>{person.F5}</td>
                                                <td>{person.F1}</td>
                                                <td>{person.F3}</td>
                                                <td>
                                                <button className="User-Button" type="submit" value={person.id} onClick={this.togglePopup.bind(this, person.F8)}><i className ="fa fa-pencil-square-o"></i></button>
                                                </td>
                                                <td>
                                                <button className="User-Button" type="submit" value={person.id} onClick={this.onClickDisable.bind(this, person.F8)}><i className ="fa fa-scissors"></i></button>
                                                </td>
                                            </tr>
                                        )}                                        
                                        </tbody>

                                        {/* /.box-Footer */}
                                        <tfoot>
                                        <tr className="tableheading">
                                        <th>Emp ID</th>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                        </tr>
                                        </tfoot>
                                    </table>
                                    </div>
                                </div>
                                </div> 
                            </div>  
                        </section>
                </div>    

                    {this.state.showPopup ? <Popup
                    text='Update User'
                    closePopup={this.togglePopup.bind(this)} 
                    masterid= {this.state.id} />
                    : null
                    }

                </div>
                
           
        )


    }
}

export default updateuser
