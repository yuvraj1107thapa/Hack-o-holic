import React, { useState } from "react";
import contactimg from "../../images/contact.jpg"
import { NavLink, useHistory } from "react-router-dom";
const Contact = () => {
const history =useHistory();
const [msg,setMsg]=useState({
name:"",
email:"",
message:""
});

const handleInputs=(event)=>{
  let name=event.target.name;
  let value=event.target.value;
  setMsg({...msg, [name]:value});
}

const handleSubmit=async (event)=>{
  event.preventDefault();
  const {name,email,message}=msg;
  try{
    const res= await fetch("/user/contact",{
      method : "POST",
      headers : {
                 "Content-Type" : "application/json"
              },
      body : JSON.stringify({
                name, email, message
              })
    });
    //  const data=await res.json();
     if(res.status===200){
      window.alert("Feedback Sent");
      history.push("/");
      console.log("Feedback Sent");
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
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have Some <b>Question?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={contactimg} alt="Contact" id="cntcimg" className="w-75" />
            </div>
            <div className="col-md-6">
              <form >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input 
                    type="text"
                    className="form-control"
                    value={msg.name}
                    onChange={handleInputs}
                    id="name"
                    placeholder="John Smith"
                    name="name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={msg.email}
                    onChange={handleInputs}
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    value={msg.message}
                    onChange={handleInputs}
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="message"
                  ></textarea> 
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Rate Us: &nbsp;&nbsp;
                  </label>
                  <NavLink to="#" className="card-link vote text-danger"><i class="fa fa-heart"></i></NavLink>
                  <NavLink to="#" className="card-link vote text-dark "><i class="fa fa-thumbs-down"></i></NavLink>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-outline-primary rounded-pill px-4">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
