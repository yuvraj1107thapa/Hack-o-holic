import React, { useEffect, useState,useContext } from "react";
import Buysellmenu from "./buysellmenu";
import "../../App.css"
import axios from "axios";
import userContext from "../../context/userContext";
import { useHistory } from "react-router-dom";
const Buy =()=>{
  const history = useHistory();
  const {userData} = useContext(userContext);
   const [users,setUsers]=useState([]);
   useEffect(()=>{
     
     if(!userData.user)
     history.push("/login");
     
     axios.get("/user/display")
     .then(res=>{
       setUsers(res.data) 
     })
     
   })
  
   const URL = 'https://wa.me';
   const handleSubmit=async (number,id)=>{
        number = number.replace(/[^\w\s]/gi, '').replace(/ /g, '');
        let url = `${URL}/${number}`;
        let message=`hi i want to buy your product id  ${id}`
        url += `?text=${encodeURI(message)}`;
        window.open(url);
   };
    return(
        <> 
        <Buysellmenu/>
        <div id='buypos'> 
        <main className="ms-sm-auto col-lg-10 px-md-4 ">
        <div className='container shadow w-100 mb-5 mt-5'>
           <div className="row">

          {users && users.map(rest =>(
          <div id="cardposshift" className="card text-center p-2 border-4 mt-5  w-25 rounded-0"  key={rest._id}>
          <img id="imgset" className="img-fluid d-block mx-auto" src={`/${rest.image}`} alt="Car"/>
          <div className="card-body p-4 py-0 h-xs-440p">
                      <h5 className="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto">{rest.product}</h5>
                      <p className="price">{rest.cost}</p>
                    </div>
                      <p className="btn w-100 px-4 mx-auto">
                        <button type="submit" onClick={() => handleSubmit(rest.phonenumber,rest._id)} className="btn btn-dark btn-lg w-100">BuyNow</button>
                      </p>
          </div>
          ))}

          </div> 
           <br></br><br></br>
           </div>
        </main>
        </div>
        </>
    )
}
export default Buy;