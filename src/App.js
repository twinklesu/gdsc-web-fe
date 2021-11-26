import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

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
import BoardCategory from "./pages/BoardCategory";
import BoardDetail from "./pages/BoardDetail";
import BoardPost from "./pages/BoardPost";
import axios from "axios";
import AlarmPost from "./pages/AlarmPost";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const fetchLogin = async () => {
      const result = await axios("/api/user");
      console.log(result.data);
      if (result.data.success) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    };
    fetchLogin();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup">
          {isLogin ? <Redirect path="/" /> : <Join />}
        </Route>
        <Route exact path="/login">
          {isLogin ? <Redirect path="/" /> : <LogIn />}
        </Route>

        {isLogin ? (
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/board" component={Board} />
            <Route
              exact
              path="/board/list/:category"
              component={BoardCategory}
            />
            <Route exact path="/board/detail/:id" component={BoardDetail} />
            <Route exact path="/board/post/:category" component={BoardPost} />

            <Route exact path="/alarm" component={Alarm} />
            <Route exact path="/alarm/:no" component={MessageDetailWrapper} />
            <Route exact path="/message/post/:id" component={AlarmPost} />

            <Route exact path="/mypage" component={MyPage} />
            <Route
              exact
              path="/mypage/updateNickname"
              component={UpdateNickname}
            />
            <Route exact path="/mypage/auth" component={Auth} />
            <Route exact path="/mypage/auth/detail" component={AuthDetail} />

            <Route exact path="/setting" component={Setting} />
          </Switch>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
