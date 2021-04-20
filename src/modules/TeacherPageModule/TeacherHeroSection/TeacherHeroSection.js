import React from "react";
import Navbar from "../../../components/common/Navbar/navbar";
import ExamLogo from "../../../assets/images/HomePage/examlogo.svg";

const TeacherHeroSection = () => {
  return (
    <div>
      <div className="mb-2">
        <div>
          <div className="hero-section-bg" />
          <Navbar />
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5 text-center">
              <div className="container">
                <img
                  src={ExamLogo}
                  className="img-fluid header-img"
                  alt="examlogoimg"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5 p-5">
              <h1 className="mb-5">MCQ MASTER</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherHeroSection;
