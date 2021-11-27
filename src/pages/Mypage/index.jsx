import React, { useEffect, useState } from "react";
import styled from "styled-components";

import arrow from "../../assets/vector/arrow.svg";
import profileImg from "../../assets/img/temp.png";
import { COLORS } from "../../components/Colors";
import { Link } from "react-router-dom";
import QuitModal from "./components/QuitModal";
import TopNavigation from "../../layout/TopNavigation";

import axios from "axios";

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
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userMajor, setUserMajor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/api/user`);
      const userInfo = result.data.data;
      setUserId(userInfo.user_id);
      setUserName(userInfo.name);
      setUserNickname(userInfo.nickname);
      setUserMajor(userInfo.major);
    };
    fetchData();
  }, []);

  const onClickLogout = () => {
    const fetchData = async () => {
      const result = await axios(`/api/user/logout`);
      result.data.success && window.location.reload();
    };
    fetchData();
  };

  return (
    <div>
      <TopNavigation activePage="myPage" />
      <MyPageWrapper>
        <div className="board-wrapper">
          <img src={profileImg} />
          <div className="profile">
            <h1>{userId}</h1>
            <p>
              {userName} / {userNickname}
            </p>
            <p>{userMajor}</p>
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
            <p className="move-to" onClick={onClickLogout}>
              로그아웃
            </p>
          </div>
        </div>
      </AccountInfo>
    </div>
  );
};

export default Index;
