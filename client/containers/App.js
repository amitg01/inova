import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../Components/HomePage";
import Header from "../Components/Header";
import CreateUser from "../Components/CreateUser";
import SingleUser from "../Components/SingleUser";
import Payment from "../Components/Payment";

import "../stylesheets/main.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/createUser" component={CreateUser} />
          <Route path="/singleUser/:id" component={SingleUser} />
          <Route path="/payment" component={Payment} />
        </Switch>
      </>
    );
  }
}
