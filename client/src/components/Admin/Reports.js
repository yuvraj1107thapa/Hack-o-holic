import React, { useState,useEffect } from 'react';
import Adminmenu from"./Adminmenu.js"
import "../../App.css"
import { PieChart, Pie, Cell  } from 'recharts';
import axios from "axios";

const Report = () => {
  const [count,setCount]=useState();
  const [counts,setCounts]=useState();
   useEffect(()=>{
     axios.get("/user/display")
     .then(res=>{
       setCount(res.data.length)
     })
     axios.get("/user/userDisplay")
     .then(res=>{
       setCounts(res.data.length)
     })
   },[])
   console.log(count);
  const data = [
    { name: "Group A", value: count },
    { name: "Group B", value: counts-count },
  ];
  const COLORS = ["#0088FE", "#00C49F"];
    return (
        <div>
        <Adminmenu/>
        <div id='contentpos'>
        <main className="ms-sm-auto col-lg-10 px-md-4 ">
        <div className="container w-75 shadow my-5">
        <div className='row'>
          <div className='col'>
          <PieChart width={400} height={400}>
            <Pie
            data={data}
            cx={200}
            cy={200}
            label
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          </PieChart>
          </div>
          <div id="reporttab" className='col text-primary '>
               <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">Sl.No</th>
                    <th scope="col">Order Status</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Order Received:</td>
                    <td>{count}</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Order Pending:</td>
                    <td>{counts-count}</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Order Pending:</td>
                    <td>0</td>
                  </tr>
                  </tbody>
                </table>

          </div>
        </div>
        
        </div>
        </main>
          </div>
        </div>
    );
}

export default Report;
