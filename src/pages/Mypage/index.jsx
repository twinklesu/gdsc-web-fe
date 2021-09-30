import React from "react";
import styled from "styled-components";

import arrow from "../../assets/vector/arrow.svg";
import profileImg from "../../assets/img/temp.png";
import { COLORS } from "../../components/Colors";
import { Link } from "react-router-dom";
import QuitModal from "./components/QuitModal";
import TopNavigation from "../../layout/TopNavigation";

const MyPageWrapper = styled.div`
  display: block;

  div {
    display: felx;
    font-size: 14px;
    margin-bottom: 20px;
    img {
      width: 60px;
      border-radius: 10%;
      margin-right: 10px;
    }

    .profile {
      display: block;
      h1 {
        font-weight: bold;
        margin-bottom: 3px;
      }
      p {
        color: ${COLORS.grey_text};
      }
    }
  }
`;

const AccountInfo = styled.div`
  display: block;
  .account-info {
    margin-bottom: 20px;
  }
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
  .move-to {
    margin-top: 15px;
  }
`;

const Index = () => {
  return (
    <div>
      <TopNavigation activePage="myPage" />
      <MyPageWrapper>
        <div className="board-wrapper">
          <img src={profileImg} />
          <div className="profile">
            <h1>twinklesu</h1>
            <p>박수빈 / nickname</p>
            <p>ITM전공 18학번</p>
          </div>
        </div>
      </MyPageWrapper>
      <AccountInfo>
        <div className="board-wrapper">
          <div className="account-info">
            <h1>계정</h1>
            <Link to="/mypage/auth">
              <p className="move-to">학교 인증</p>
            </Link>
            <Link to="/mypage/updateNickname">
              <p className="move-to">닉네임 변경</p>
            </Link>
            <div className="move-to">
              <QuitModal text="회원 탈퇴" />
            </div>
            <p className="move-to" onClick={() => alert("로그아웃")}>
              로그아웃
            </p>
          </div>
        </div>
      </AccountInfo>
    </div>
  );
};

export default Index;
