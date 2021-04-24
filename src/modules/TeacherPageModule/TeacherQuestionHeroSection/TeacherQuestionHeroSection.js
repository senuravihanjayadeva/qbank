import React, { Component } from "react";
import "./TeacherQuestionHeroSection.css";
import FAQImage from "../../../assets/images/TeacherPage/faq.svg";
import Navbar from "../../../components/common/Navbar/navbar";

export default class TeacherQuestionHeroSection extends Component {
  render() {
    return (
      <div className="mb-5">
        <Navbar />
        <div className="row HeroSectionTeacherQuestion">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              className="img-fluid header-img"
              alt="faqlogoimg"
              src={FAQImage}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 p-5">
            <h3>Let's Create MCQs</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
