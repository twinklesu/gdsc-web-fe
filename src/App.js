import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Board from "./pages/Board";
import Alarm from "./pages/Alarm";
import MessageDetailWrapper from "./pages/Alarm/components/MessageDetailWrapper";
import Join from "./pages/Account/Join";
import LogIn from "./pages/Account/LogIn";
import MyPage from "./pages/Mypage";

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

        <Route exact path="/myPage" component={MyPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
