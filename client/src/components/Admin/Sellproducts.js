import React, { useState } from 'react';
import Adminmenu from"./Adminmenu"
import "../../App.css"
import { useHistory } from 'react-router-dom';
const Sellproduct = () => {
  const history=useHistory();

  const [msg,setMsg]=useState({
    description:"",
    product:"",
    cost:"",
    phonenumber:"",
    tags:""
  });
  
  const handleInputs=(event)=>{
    let name=event.target.name;
    let value=event.target.value;
    setMsg({...msg, [name]:value});
  }
 const handleSubmit=async (event)=>{
   event.preventDefault();
   const {description,product,cost,phonenumber,tags}=msg;
   try{
    const res= await fetch("/user/sell",{
      method : "POST",
      headers : {
                 "Content-Type" : "application/json"
              },
      body : JSON.stringify({
                description, product, cost,phonenumber,tags
              })
    });
    //  const data=await res.json();
     if(res.status===200){
      window.alert("Successfully Submitted");
      history.push("/dashboard");
      console.log("Successfully Submitted");
     }
     else{
      window.alert("Information not Submited");
      console.log("Information not Submited");
     }
    }catch(error){
      console.log(error);
    }
}
    return (
        <div>
        <Adminmenu/>
        <div id='contentpos'>
        <main id="sellmain" className="ms-sm-auto col-lg-10 px-md-4 ">
        <div className="container w-75 shadow my-5">
        <form id="fromdes"> 
              <div className="row">
                <div className="col-25">
                  <label for="fname">Product Description</label>
                </div>
                <div className="col-75">
                  <input 
                   value={msg.description}
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
                  value={msg.product}
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
                  value={msg.cost}
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
                  value={msg.phonenumber}
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
                    value={msg.tags}
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
                    accept="image/png, image/jpg, image/jpeg"/>
                </div>
              </div>
              <div className="row mt-5">
              <button type="submit" onClick={handleSubmit} className="btn btn-primary  px-4">Submit <i className="fa fa-paper-plane ms-2"></i></button>
              </div>
            </form>
        </div>
        </main>
          </div>
        </div>
    );
}

export default Sellproduct;
