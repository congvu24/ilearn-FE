import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function MyRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="w-32 h-32 bg-primary"></div>
        </Route>
      </Switch>
    </Router>
  );
}
