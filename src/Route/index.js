import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateTeacher from "../pages/Create-Teacher";
import Dashboard from "../pages/Dashboard";
import Detail from "../pages/Detail";
import Homepage from "../pages/Homepage";
import TeacherLogin from "../pages/Teacher-Login";
import UserLogin from "../pages/User-Login";

export default function MyRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login/teacher">
          <TeacherLogin />
        </Route>
        <Route exact path="/login">
          <UserLogin />
        </Route>
        <Route exact path="/register">
          <CreateTeacher />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}
