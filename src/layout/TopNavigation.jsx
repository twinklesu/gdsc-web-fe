import React from "react";
import styled from "styled-components";
import { COLORS } from "../components/Colors";

import MessageBoxNavigation from "./components/MessageBoxNavigation";
import MainNavigation from "./components/MainNavigation";
import XvectorNavigation from "./components/XvectorNavigation";
import ArrowNavigation from "./components/ArrowNavigation";

const NavigationWrapper = styled.div`
  display: flex;
  height: 55px;
  background-color: white;
`;

// 페이지 마다 보여지는게 달라져..

const mapPageToNavi = {
  messageBox: <MessageBoxNavigation />,
  main: <MainNavigation />,
  myPage: <ArrowNavigation pageName="마이페이지" back="/" />,
  join: <XvectorNavigation pageName="회원가입" />,
  auth: <XvectorNavigation pageName="학교 인증" back="/mypage" />,
  updateNick: <XvectorNavigation pageName="닉네임 변경" back="/mypage" />,
  authDetail: <XvectorNavigation pageName="이메일 인증" back="/mypage" />,
  setting: <ArrowNavigation pageName="홈 화면 설정" back="/" />,
};

const TopNavigation = ({ activePage }) => {
  return <NavigationWrapper>{mapPageToNavi[activePage]}</NavigationWrapper>;
};

export default TopNavigation;
