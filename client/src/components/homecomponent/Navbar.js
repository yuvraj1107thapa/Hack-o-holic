import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../images/logoF.jpg";
import userContext from "../../context/userContext";

const Navbar = () => {
  const { userData } = useContext(userContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid ">
          <NavLink className="navbar-brand" to="/">
            <img className="logos" src={logo} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active px-3 "
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link  px-3" to="/services">Services</NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link  px-3" to="/buy">
                  SellBuy
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  px-3" to="/about">
                  About
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link  px-3" to="/dashboard">Admin</NavLink>
              </li> */}
              {/* <li className="nav-item">
                <NavLink className="nav-link  me-3 px-3" to="/contact">Contact</NavLink>
              </li> */}
              {userData.user ? (
                <li className="nav-item">
                  <NavLink
                    className="btn btn-outline-primary ms-3 px-4 rounded-pill"
                    to="/logout"
                  >
                    <i className="fa fa-sign-out me-2"></i>Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="btn btn-outline-primary ms-3 px-4 rounded-pill"
                      to="/login"
                    >
                      <i className="fa fa-sign-in me-2"></i>Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="btn btn-outline-primary ms-3 px-4 rounded-pill"
                      to="/signup"
                    >
                      <i className="fa fa-user-plus me-2"></i>Signup
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
