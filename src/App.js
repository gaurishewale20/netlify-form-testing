import React from "react";
import ContactUs from "./ContactUs/contactus";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ContactUs} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
