import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "../components/pages/HomeScreen";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
