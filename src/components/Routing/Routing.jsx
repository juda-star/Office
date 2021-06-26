import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Form from "../Form/Form";
import Contact from "../Contact/Contact";
export default function Routing() {
  return (
    <div>
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>

        <Route path="/Input">
          <Form />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}
