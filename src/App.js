import React from "react";
import ContactUs from "./ContactUs/contactus";
import Submit from "./ContactUs/submit";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ContactUs} />
        <Route path="/formsubmitted" exact component={Submit} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
