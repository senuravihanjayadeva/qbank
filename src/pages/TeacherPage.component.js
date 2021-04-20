import React from "react";
import TeacherHeroSection from "../modules/TeacherPageModule/TeacherHeroSection/TeacherHeroSection";
import TeacherDashboard from "../modules/TeacherPageModule/TeacherDashboard/TeacherDashboard";
import TeacherCreateQuestionPool from "../modules/TeacherPageModule/TeacherCreateQuestionPool/TeacherCreateQuestionPool";
const TeacherPageComponent = () => {
  return (
    <div>
      <TeacherHeroSection />
      <TeacherDashboard />
      <TeacherCreateQuestionPool />
    </div>
  );
};
export default TeacherPageComponent;
