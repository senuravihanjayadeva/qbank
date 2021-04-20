import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageComponent from "../pages/HomePage.component";
import AdminPageComponent from "../pages/AdminPage.component";
import LoginStudent from "../modules/LoginModule/loginstudent";
export default function RoutesComponent() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginStudent} />
        <Route path="/admin" exact component={AdminPageComponent} />
      </Switch>
    </Router>
  );
}
