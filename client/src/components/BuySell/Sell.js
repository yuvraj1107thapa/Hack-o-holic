import React, {  useState } from "react";
import { useHistory } from "react-router-dom";
import Buysellmenu from "./buysellmenu";
import axios from 'axios';
const Sell =()=>{
  const history=useHistory();
  const [msg,setMsg]=useState({
    description:"",
    product:"",
    cost:"",
    phonenumber:"",
    tags:"",
    image:""
  });
  const handleInputs=(event)=>{
    let name=event.target.name;
    let value=event.target.value;
    setMsg({...msg, [name]:value});
  }
  const handlePhoto = (e) => {
    setMsg({...msg, image: e.target.files[0]});
}
 const handleSubmit=async (event)=>{
   event.preventDefault();
   const formData = new FormData();
   formData.append('description', msg.description);
   formData.append('product', msg.product);
   formData.append('cost', msg.cost);
   formData.append('phonenumber', msg.phonenumber);
   formData.append('tags', msg.tags);
   formData.append('image', msg.image);

   axios.post('/user/sell', formData)
   .then(res => {
      console.log(res);
      if(res.status===200){
        window.alert("Successfully Submitted");
        history.push("/selledit");
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

    return(
        <>  
        <Buysellmenu/>
        <div id='buypos'> 
        <main className="ms-sm-auto col-lg-10 px-md-4 ">
        <div className="container w-75 shadow my-5">
        <form id="fromdes" encType='multipart/form-data'> 
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
                    onChange={handlePhoto}
                    accept=".png, .jpg, .jpeg"/>
                    
                </div>
              </div>
              <div className="row mt-5">
              <button type="submit" onClick={handleSubmit} className="btn btn-primary  px-4">Submit <i className="fa fa-paper-plane ms-2"></i></button>
              </div>
            </form>
        </div>
        </main>
        </div>
          
        </>
    )
}
export default Sell;