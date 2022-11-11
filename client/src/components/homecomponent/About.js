import React from "react";
import { useHistory } from "react-router-dom";
import Aboutlogs from "../../images/about1.jpg";
const About = () => {
  const { push } = useHistory();

  return (
    <div>
      <section id="about" className="pb-5">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src={Aboutlogs}
                alt="About"
                id="abtimg"
                className="w-75 mt-5"
              />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">About Us</h3>
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
                odit dolorum, necessitatibus dignissimos reprehenderit dicta id
                rem. Exercitationem soluta ipsam necessitatibus aliquid totam
                recusandae a alias optio eum quas, corrupti ducimus cupiditate
                aut adipisci eos tempora quam similique nemo quo, vel dicta
                blanditiis. Esse magnam laudantium officiis et sed quis?
              </p>
              <button
                className="btn btn-primary rounded-pill px-4 py-2"
                onClick={() => push("/services")}
              >
                Get Started
              </button>
              {/* <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2" onClick={() => push('/contact')}>Contact Us</button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
