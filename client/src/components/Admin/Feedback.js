import React,{ useEffect, useState } from 'react';
import Adminmenu from"./Adminmenu.js"
import "../../App.css"
import { NavLink } from 'react-router-dom';
import axios from "axios";
const Feedback = () => {
  const [users,setUsers]=useState();
  useEffect(()=>{
    axios.get("/user/feedbackDisplay")
    .then(res=>{
      setUsers(res.data)
    })
  },[])
    return (
        <div>
        <Adminmenu/>
        <div id='contentpos'>
        <main className="ms-sm-auto col-lg-10 px-md-4 ">
        <div className='row justify-content-center'>
        {users && users.map(rest =>(
                <div className="card w-75 mt-5 " key={rest._id}>
                <div className="card-header">
                Customer Id: {rest._id}
                </div>
                <div className="card-body">
                  <h6 className="card-title">CustomerName: {rest.name}</h6>
                  <p className="card-text"><strong>Description:</strong>{rest.message}</p>
                  <div className='row'>
                  <div className='col'>
                        <i class="fa fa-heart"></i>5
                        &nbsp;&nbsp;
                        <i class="fa fa-thumbs-down"></i>6
                        </div>
                        <div className='col ms-5'>
                        <NavLink to="#" className="btn btn-primary">Reply Customer</NavLink>
                  </div>
                  </div>
                </div>
            </div>
            
      ))}

        </div>
        </main><br></br><br></br>
        </div>
        </div>
    );
}

export default Feedback;
