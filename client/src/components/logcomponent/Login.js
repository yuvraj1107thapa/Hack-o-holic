import React,{useState,useContext} from 'react';
import { NavLink } from "react-router-dom";
import {useHistory} from "react-router";
import "../../App.css"
import userContext from '../../context/userContext';
import axios from 'axios';
const Login= () =>{
 const history=useHistory();
 const { setUserData } = useContext(userContext);
 const [user,setUser]=useState({
   email:"",
   password:""
 }); 

const handleChange = (event)=>{
  let name=event.target.name;
  let value=event.target.value;

  setUser({...user,[name]:value})
}
const handleSubmit = async(e)=>{
  e.preventDefault();
  const {email,password}=user;
  const loginUser = {email, password};
    const res = await axios.post("/user/login", loginUser);
    setUserData({
      token: res.data.token,
      user: res.data.user
      });
      localStorage.setItem("auth-token", res.data.token);
    if(res.status === 200 ){
      window.alert("logedIn Successful");
      history.push("/buy");
    }
    else{
      window.alert("Invalid Credentials");
    }
}
  return( 
   <>
     <div className="container shadow my-5">
        <div className="row">
          <div id="loginimg" className="col ms-2 d-flex flex-column align-items-center text-white  justify-content-center mt-5">
            <h1 id="headlog" className="display-4 fw-bolder ">Welcome </h1>
            <p className="lead text-center fw-bolder">Enter Your Credentials To Login</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/signup"
              className="btn btn-outline-light rounded-pill pb-2 w-50 fw-bolder"
            >
              Register
            </NavLink>
          </div>
          <div className="col-md-6 p-5 ms-5">
            <h1 className="display-6 fw-bolder mb-5 text-center">LOGIN</h1>
            <form method="POST"  >
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={user.email}
                  onChange={handleChange}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  autoComplete='off'
                />
                
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={user.password}
                  onChange={handleChange}
                  id="exampleInputPassword1"
                  name="password"
                  autoComplete='off'
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button type="submit" onClick={handleSubmit}  className="btn btn-primary w-100 mt-4 rounded-pill">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
   </>
  )
}
export default Login; 