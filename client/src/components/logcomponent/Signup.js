import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../../App.css";
import userContext from "../../context/userContext";
import axios from "axios";

const Signup = () => {
  const { setUserData } = useContext(userContext);
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInputs = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = user;
    try {
      const res = await fetch("/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      const data = await res.json();
      const loginResponse = await axios.post("/user/login", {
        email,
        password,
      });
      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      localStorage.setItem("auth-token", loginResponse.data.token);
      if (res.status === 400 || !data) {
        window.alert("Already Used Information");
        console.log("Unsuccessful regestration");
      } else {
        window.alert("successful regestration");
        console.log("successful regestration");
        history.push("/login");
      }
      console.log(loginResponse);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div
            id="loginimg"
            className="col me-5 mt-5 d-flex flex-column align-items-center text-white justify-content-center order-2"
          >
            <h1 id="headlog" className="display-4 fw-bolder">
              Hello, Friend
            </h1>
            <p className="lead text-center fw-bolder">
              Enter Your Details to Register
            </p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50 fw-bolder"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <form method="POST">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={user.username}
                  onChange={handleInputs}
                  id="name"
                  name="username"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={user.email}
                  onChange={handleInputs}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
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
                  onChange={handleInputs}
                  id="exampleInputPassword1"
                  name="password"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I Agree Terms and Conditions
                </label>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-outline-primary w-100 mt-4 rounded-pill"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
