import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SplashRoute from "../component/animation/SplashRoute";
import CreateTeacher from "../pages/Create-Teacher";
import Dashboard from "../pages/Dashboard";
import Detail from "../pages/Detail";
import Homepage from "../pages/Homepage";
import TeacherLogin from "../pages/Teacher-Login";
import UserLogin from "../pages/User-Login";
import { AnimatePresence } from "framer-motion";
import AuthenToken from "../pages/AuthenToken";

export default function MyRoute() {
  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Route exact path="/login/teacher">
            <SplashRoute key="/login/teacher">
              <TeacherLogin />
            </SplashRoute>
          </Route>
          <Route exact path="/login">
            <SplashRoute key="/login">
              <UserLogin />
            </SplashRoute>
          </Route>
          <Route exact path="/register">
            <SplashRoute key="/register">
              <CreateTeacher />
            </SplashRoute>
          </Route>
          <Route path="/detail/:id">
            <SplashRoute key="/detail/:id">
              <Detail />
            </SplashRoute>
          </Route>
          <Route path="/dashboard">
            <SplashRoute key="/dashboard">
              <Dashboard />
            </SplashRoute>
          </Route>
          <Route path="/authen/:token">
              <AuthenToken />
          </Route>
          <Route path="/">
            <SplashRoute key="/">
              <Homepage />
            </SplashRoute>
          </Route>
        </Switch>
      </AnimatePresence>
    </Router>
  );
}
