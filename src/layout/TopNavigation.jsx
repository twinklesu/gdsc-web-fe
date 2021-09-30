import React from "react";
import styled from "styled-components";
import { COLORS } from "../components/Colors";

import MessageBoxNavigation from "./components/MessageBoxNavigation";
import MainNavigation from "./components/MainNavigation";
import MyPageNavigation from "./components/MyPageNavigation";
import XvectorNavigation from "./components/XvectorNavigation";

const NavigationWrapper = styled.div`
  display: flex;
  height: 55px;
  background-color: white;
`;

// 페이지 마다 보여지는게 달라져..

const mapPageToNavi = {
  messageBox: <MessageBoxNavigation />,
  main: <MainNavigation />,
  myPage: <MyPageNavigation />,
  join: <XvectorNavigation pageName="회원가입" />,
  auth: <XvectorNavigation pageName="학교 인증" back="/mypage" />,
  updateNick: <XvectorNavigation pageName="닉네임 변경" back="/mypage" />,
};

const TopNavigation = ({ activePage }) => {
  return <NavigationWrapper>{mapPageToNavi[activePage]}</NavigationWrapper>;
};

export default TopNavigation;
