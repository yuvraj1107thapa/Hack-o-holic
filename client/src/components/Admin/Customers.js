import React,{ useEffect, useState } from 'react';
import Adminmenu from"./Adminmenu.js"
import "../../App.css"
import axios from "axios";
const Customer = () => {
  const [users,setUsers]=useState();
   useEffect(()=>{
     axios.get("/user/userDisplay")
     .then(res=>{
       setUsers(res.data)
     })
   },[])
    return (
        <div>
        <Adminmenu/>
        <div id='contentpos'>
        <main className="ms-sm-auto col-lg-10 px-md-4 ">
        <div className="table-responsive w-75">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">Sl-N</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Customer Id</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>


          {users && users.map((rest,index) =>(
          <tr key={rest._id}>
                    <td>{index}</td>
                    <td>{rest.username}</td>
                    <td>{rest._id}</td>
                    <td>{rest.email}</td>
          </tr>
          ))}
                </tbody>
              </table>
            </div>
        </main>
          </div>
        </div>
    );
}

export default Customer;
