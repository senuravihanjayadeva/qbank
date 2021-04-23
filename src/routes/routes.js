import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageComponent from "../pages/HomePage.component";
import AdminPageComponent from "../pages/AdminPage.component";
import TeacherPageComponent from "../pages/TeacherPage.component";
import TeacherQuestions from "../modules/TeacherPageModule/TeacherQuestions/TeacherQuestions";

export default function RoutesComponent() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePageComponent} />
        <Route path="/student" exact component={AdminPageComponent} />
        <Route path="/teacher" exact component={TeacherPageComponent} />
        <Route path="/admin" exact component={AdminPageComponent} />
        <Route
          path="/qpool/:questionpoolname/:id"
          exact
          component={TeacherQuestions}
        />
      </Switch>
    </Router>
  );
}
