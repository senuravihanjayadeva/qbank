import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageComponent from "../pages/HomePage.component";
import AdminPageComponent from "../pages/AdminPage.component";
import TeacherPageComponent from "../pages/TeacherPage.component";
import TeacherQuestions from "../modules/TeacherPageModule/TeacherQuestions/TeacherQuestions";
import Footer from "../components/common/Footer/Footer";
import StudentMainPage from "../pages/StudentMainPage";
import StudentQuizSection from "../modules/StudentPageModule/StudentQuizSection/StudentQuizSection";
import TeacherQuestionPoolScoreBoard from "../modules/TeacherPageModule/TeacherQuestionPoolScoreBoard/TeacherQuestionPoolScoreBoard";

export default function RoutesComponent() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePageComponent} />
        <Route path="/teacher" exact component={TeacherPageComponent} />
        <Route path="/student" exact component={StudentMainPage} />
        <Route path="/admin" exact component={AdminPageComponent} />
        <Route
          path="/qpool/:questionpoolname/:id"
          exact
          component={TeacherQuestions}
        />
        <Route
          path="/student/quiz/:quizname/:quizid"
          exact
          component={StudentQuizSection}
        />
        <Route
          path="/teacher/scoreboard/quiz/:quizname/:quizid"
          exact
          component={TeacherQuestionPoolScoreBoard}
        />
      </Switch>
      <Footer />
    </Router>
  );
}
