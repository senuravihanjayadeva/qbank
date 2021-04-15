import React from "react";
import HelloGif from "../../../assets/images/AdminPage/hello.gif";
import Navbar from "../../../components/common/Navbar/navbar";
import "./AdminHeroSection.css";

const AdminHeroSection = () => {
  return (
    <div>
      <Navbar />
      <div className="AdminHeroSection">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <img src={HelloGif} alt="hellogif" className="img-fluid" />
            </div>
            <div className="col-md-6 mt-5 text-center">
              <h1>Hello Senura Jayadeva</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeroSection;
