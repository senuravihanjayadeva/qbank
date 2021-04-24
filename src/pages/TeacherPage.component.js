import React from "react";
import TeacherHeroSection from "../modules/TeacherPageModule/TeacherHeroSection/TeacherHeroSection";
import TeacherDashboard from "../modules/TeacherPageModule/TeacherDashboard/TeacherDashboard";
import TeacherQuestionPool from "../modules/TeacherPageModule/TeacherQuestionPool/TeacherQuestionPool";

const TeacherPageComponent = () => {
  return (
    <div>
      <TeacherHeroSection />
      <TeacherDashboard />
      <TeacherQuestionPool />
    </div>
  );
};
export default TeacherPageComponent;
