import React from "react";
import OnlineTestImg from "../../../assets/images/HomePage/onlinetest.svg";
import "./about.css";

const About = () => {
  return (
    <div className="AboutSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={OnlineTestImg}
              className="img-fluid header-img"
              alt="onlinetestimg"
            />
          </div>
          <div className="col-lg-6 p-5">
            <h1 className="mb-5">QUIZ MASTER</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
