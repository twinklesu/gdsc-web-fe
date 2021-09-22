import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Board from "./pages/Board";
import Alarm from "./pages/Alarm";
import MessageDetailWrapper from "./pages/Alarm/components/MessageDetailWrapper";
import Join from "./pages/Account/Join";
import LogIn from "./pages/Account/LogIn";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/alarm" component={Alarm} />
        <Route exact path="/alarm/:no" component={MessageDetailWrapper} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/login" component={LogIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
