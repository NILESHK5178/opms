import React, { useState } from 'react';
import '../css/newuser.css';
import axios from 'axios';
import Header from '../Pages/header';
import SideBar from '../Pages/sideBar';


const NewCompany = () => {

  const [companyname, setCompanyName] = useState('');
  const [file, setFile] = useState('');
  
  const handleSubmit = async e => {
    e.preventDefault();

    if (!companyname) {
      alert('companyname is required');
    } else {
    const formData = new FormData();
    formData.append('file', file,  companyname);
    
    try{   
      const res = await axios.post('http://localhost:3208/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      const { fileName, filePath } = res.data;

              const formData2 = new FormData()
              formData2.append('companyname', fileName);
              formData2.append('filepath', filePath);

              axios
              .post("http://localhost:3208/company", formData2, {
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
    }
  
    //this.props.history.push("/MainPage")
  } 
  };

  const changehandler = (e) => {
    setCompanyName(e.target.value); 
  }

  const fileChangedHandler = e => {
    setFile(e.target.files[0]);
   }
  
    return (
      <div>
            <Header />
            <SideBar />
      <div className="content-wrapper">
        <form>
                   
          <center>
           <br/>
          <h4><label>Company Name</label></h4>
          <input type="text" name="companyname" data-test="companyname" value={companyname} onChange={changehandler} />
          
          <h4><label>Company Logo</label></h4>
          <input type="file" name="avatar" onChange={fileChangedHandler} />
          <br/>
          <br/>
          <button type="submit"  onClick={handleSubmit}>Register New Company</button>
          
          </center>
        </form>

      </div>
      </div>
    );
  }

export default NewCompany;