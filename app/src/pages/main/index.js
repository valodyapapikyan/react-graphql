import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../home-page";

const Content = () => {
  return (
    <div className="main__wrapper">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default Content;
