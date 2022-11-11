import React from "react";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import { NavLink } from "react-router-dom";
import Classicalimg from "../../images/single-vendor.png";
const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 mt-5 justify-content-left">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Welcome to BechDe GEHU
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white">
                {/* Transforming dreams into reality! */}
              </p>
              {/* <div className="buttons d-flex justify-content-center">
                <NavLink
                  to="/contact"
                  className="btn btn-light me-4 rounded-pill px-4 py-2"
                >
                  Get Quote
                </NavLink>
                <NavLink
                  to="/services"
                  className="btn btn-outline-light rounded-pill px-4 py-2"
                >
                  Our Services
                </NavLink>
              </div> */}
            </div>
            <div className="col mt-5">
              <img
                src={Classicalimg}
                className="classicalimg"
                alt="classical"
              />
            </div>
          </div>
        </div>
      </section>
      <About />
      {/* <Services />
      <Contact /> */}
    </div>
  );
};

export default Home;
