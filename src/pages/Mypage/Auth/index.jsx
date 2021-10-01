import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";

import TopNavigation from "../../../layout/TopNavigation";

const MainWrapper = styled.div`
  display: block;

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .auth-button {
    margin-top: 10px;
    background-color: ${COLORS.grey_light};
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
    border-radius: 5px;
  }
  p {
    font-size: 12px;
    margin-top: 5px;
    color: ${COLORS.grey_500};
  }
`;

const Index = () => {
  return (
    <MainWrapper>
      <TopNavigation activePage="auth" />
      <h1 className="title">인증 방식 선택</h1>
      <div className="auth-button">
        <Link to="/mypage/auth/detail">
          <h3>재학생 인증</h3>
          <p>게시판 등 모든 커뮤니티 이용이 가능하며,</p>
          <p>재학 중인 학교 이메일을 통해 인증</p>
        </Link>
      </div>
    </MainWrapper>
  );
};

export default Index;
