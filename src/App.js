import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Board from "./pages/Board";
import Alarm from "./pages/Alarm";
import MessageDetailWrapper from "./pages/Alarm/components/MessageDetailWrapper";
import Join from "./pages/Account/Join";
import LogIn from "./pages/Account/LogIn";
import MyPage from "./pages/Mypage";
import UpdateNickname from "./pages/Mypage/UpdateNickname";
import Auth from "./pages/Mypage/Auth";
import AuthDetail from "./pages/Mypage/AuthDatail";
import Setting from "./pages/Setting";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/alarm" component={Alarm} />
        <Route exact path="/alarm/:no" component={MessageDetailWrapper} />
        <Route exact path="/signup" component={Join} />
        <Route exact path="/login" component={LogIn} />

        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/mypage/updateNickname" component={UpdateNickname} />
        <Route exact path="/mypage/auth" component={Auth} />
        <Route exact path="/mypage/auth/detail" component={AuthDetail} />

        <Route exact path="/setting" component={Setting} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
