import React, { useEffect, useState } from "react";
import Buysellmenu from "./buysellmenu";
import axios from "axios";

import { NavLink } from 'react-router-dom';
const Selledit =()=>{
   const [users,setUsers]=useState([]);
   useEffect(()=>{
  
     axios.get("/user/display")
     .then(res=>{
       setUsers(res.data) 
     })
     
   })
    return(
        <> 
        <Buysellmenu/>
        <div id='buypos'> 
        <main className="ms-sm-auto col-lg-10 px-md-4 ">
        <div className='container shadow w-100 mb-5 mt-5'>
           <div class="row">
           {users && users.map(rest =>(
          <div id="cardposshift" className="card text-center p-2 border-4 mt-5  w-25 rounded-0"  key={rest._id}>
          <img id="imgset" className="img-fluid d-block mx-auto" src={`/${rest.image}`} alt="Car"/>
          <div className="card-body p-4 py-0 h-xs-440p">
                      <h5 className="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto">{rest.product}</h5>
                      <p className="price">{rest.cost}</p>
                    </div>
                      <p className="btn w-100 px-4 mx-auto">
                      <NavLink to={`/edit/${rest._id}`} className="btn btn-dark btn-lg w-100">Edit</NavLink>
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
export default Selledit;