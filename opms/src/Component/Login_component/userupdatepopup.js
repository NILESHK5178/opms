import React, { Component } from 'react'
import '../css/login.css';
import axios from 'axios';

class userupdatepopup extends Component {
    constructor(props) {
        super(props);
           this.state = {
            masterid: this.props.masterid,
            empid: 0,
            username: '',
            email: '',
            empname: '',
            selectedFile: null
        };

        this.changehandler = this.changehandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
    }

    componentDidMount() {
        axios
        .get(`http://localhost:3208/usersid/${this.state.masterid}`)
        .then((response) => {
            this.setState({ 
                empid: response.data[0].F0,
                username: response.data[0].F1,
                email: response.data[0].F3,
                empname: response.data[0].F5
            });
         })
        .catch(error => alert({ error }));  
    }

    changehandler(evt){
        this.setState({ [evt.target.name]: evt.target.value }); 
      }

      fileChangedHandler = event => {
          this.setState({
            selectedFile: event.target.files[0],
            loaded: 0
          })
          
      }

    handleSubmit = async e => {
      const formData = new FormData();
      formData.append('file', this.state.selectedFile, this.props.masterid +'-'+ this.state.empid +'-'+ this.state.username);
      
      try{   
        const res = await axios.post('http://localhost:3208/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });

                const formData2 = new FormData()
                formData2.append('masterid', this.props.masterid);
                formData2.append('empid', this.state.empid);
                formData2.append('username', this.state.username);
                formData2.append('email', this.state.email);
                formData2.append('empname', this.state.empname);
                formData2.append('filepath', res.data.filePath);

                axios
                .put(`http://localhost:3208/updateuser`, formData2, {
                  headers: { 'Content-Type': 'application/json' }
                })
                .then((response) => {})
                .catch(error => alert({ error })); 
      } catch (err){
        if(err.response.status === 500) {
          alert('There was a problem with server');
      } else {
          alert(err.response.data.msg);
      }          
      
      let closeppup 
      closeppup = this.props.closePopup
    } 
    }  

    render() {
        const {empid, empname, username, email} = this.state
        return (
          <div className='popup'>
            <div className='popup_inner'>
            <button className="popupclose" onClick={this.props.closePopup}>X</button>
            
            <h1 className ="popuphead">{this.props.text}</h1>
            
            <form onSubmit={this.handleSubmit}>
            <center>
            <h4><label>Emp ID</label></h4>
            <input type="text" name="empid" data-test="empid" value={empid} onChange={this.changehandler} />

            <h4><label>Emp Name</label></h4>
            <input type="text" name="empname" data-test="empname" value={empname} onChange={this.changehandler} />
                
            <h4><label>User Name</label></h4>
            <input type="text" name="username" data-test="username" value={username} onChange={this.changehandler} />
            
            <h4><label>email</label></h4>
            <input type="text" name="email" data-test="email" value={email} onChange={this.changehandler} />

            <h4><label>User Image</label></h4>
            <input type="file" name="avatar" onChange={this.fileChangedHandler} />

            <br/>
            <button type="submit">Update User</button>
            </center>
            </form>
                
            </div>
          </div>
        );
      }
}

export default userupdatepopup
