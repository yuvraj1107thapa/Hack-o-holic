import React, { useEffect, useState } from 'react';
import "../../App.css"
import Adminmenu from './Adminmenu.js';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
const Sellproducteditfrom = () => {
  const history=useHistory();
  const params=useParams();
  const [user,setUser]=useState([]);
  const handleInputs=(event)=>{
    let name=event.target.name; 
    let value=event.target.value;
    setUser({...user, [name]:value});
  }
  const handlePhoto = (e) => {
    setUser({...user, image: e.target.files[0]});
}
const handleSubmit=async (event)=>{
  event.preventDefault();
  const formData = new FormData();
  formData.append('description', user.description);
  formData.append('product', user.product);
  formData.append('cost', user.cost);
  formData.append('phonenumber', user.phonenumber);
  formData.append('tags', user.tags);
  formData.append('image', user.image);
  axios.post(`/user/edit/${params.id}`, formData)
  .then(res => {
    console.log(res);
    if(res.status===200){
      window.alert("Successfully Submitted");
      history.push("/dashboard");
      console.log("Successfully Submitted");
     }
     else{
      window.alert("Information not Submited");
      console.log("Information not Submited");
     }
 })
 .catch(err => {
    console.log(err);
 });
}

  useEffect(()=>{
    axios.get(`/user/editadmin/${params.id}`)
      .then(res=>{
        setUser(res.data) 
        console.log(res.data)
      })
     },[params.id])
    return (
        <>
          <Adminmenu/>
        <div id='contentpos' >
          <main className="ms-sm-auto col-lg-10 px-md-4">
           <div className='container shadow w-75 mb-5 mt-5'>
           <form id="fromdes" encType='multipart/form-data'> 
               <div className="row">
                <div className="col-25">
                  <label for="fname">Product Description</label>
                </div>
                <div className="col-75">
                  <input 
                   value={user.description}
                   onChange={handleInputs}
                   type="text"
                   id="Title"
                   name="description" 
                   placeholder="Description.."/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="fname">Product name</label>
                </div>
                <div className="col-75">
                  <input  
                  value={user.product}
                  onChange={handleInputs}
                  type="text" 
                  id="Title" 
                  name="product" 
                  placeholder="Seller name.."/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="lname">Product Cost</label>
                </div>
                <div className="col-75">
                  <input  
                  value={user.cost}
                  onChange={handleInputs}
                  type="text" 
                  id="Body" 
                  name="cost" 
                  placeholder="cost.."/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="lname">Whatsapp Number</label>
                </div>
                <div className="col-75">
                  <input  
                  value={user.phonenumber}
                  onChange={handleInputs}
                  type="tel" 
                  id="Body" 
                  name="phonenumber" 
                  placeholder="add +91 with number.."/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="country">Product Tags</label>
                </div>
                <div className="col-75">
                   
                <input  
                    value={user.tags}
                    onChange={handleInputs}
                    type="text"  
                    name="tags" 
                    placeholder="Tags..."/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="image">Product Image</label>
                </div>
                <div className="col-75 mt-3">
                <input  
                    type="file" 
                    name="image"  
                    onChange={handlePhoto}
                    accept=".png, .jpg, .jpeg"/>
                </div>
              </div>
              <div className="row">
              <button type="submit" onClick={handleSubmit}  className="btn btn-primary px-4">Submit <i className="fa fa-paper-plane ms-2"></i></button>
              </div>
            </form>
           </div>
           </main>
           </div>
        </>
    );
}

export default Sellproducteditfrom;
