import React, { Component } from "react";
import StudentHeroSection from "../modules/StudentPageModule/StudentHeroSection/StudentHeroSection";
import StudentOptionDivSection from "../modules/StudentPageModule/StudentOptionDivSection/StudentOptionDivSection";

class StudentMainPage extends Component {
  render() {
    return (
      <div>
        <StudentHeroSection />
        <StudentOptionDivSection />
      </div>
    );
  }
}

export default StudentMainPage;
