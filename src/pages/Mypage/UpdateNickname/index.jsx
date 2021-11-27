import React, { useState } from "react";
import styled from "styled-components";

import TopNavigation from "../../../layout/TopNavigation";
import MainButton from "../../../components/Button/MainButton";
import MainInput from "../../../components/Input/MainInput";
import { COLORS } from "../../../components/Colors";

import axios from "axios";
import { useHistory } from "react-router";

const MainWrapper = styled.div`
  display: block;
  .title {
    font-size: 12px;
    color: ${COLORS.grey_600};
  }
  .input-wrapper {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

const Index = () => {
  let history = useHistory();
  const [nickname, setNickname] = useState("");
  const [isError, setIsError] = useState(false);

  const onChangeNickname = (e) => {
    const { value } = e.target;

    if (value.length < 2) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    setNickname(value);
  };

  const onClickSetting = () => {
    isError ? alert("닉네임을 다시 입력하세요") : changeFunction();
  };

  const changeFunction = async () => {
    const writeResult = await axios({
      method: "PUT",
      url: "/api/user",
      data: {
        nickname: nickname,
      },
    });
    if (writeResult.data.success) {
      // 성공
      history.push("/mypage");
    } else {
      alert(`${writeResult.data.message}. (${writeResult.data.data.nickname})`);
    }
  };

  return (
    <MainWrapper>
      <TopNavigation activePage="updateNick" />
      <div className="main">
        <h1 className="title">닉네임</h1>
        <div className="input-wrapper">
          <MainInput
            value={nickname}
            type="text"
            onChange={onChangeNickname}
            placeholder="변경할 닉네임을 입력해주세요"
          />
          {isError && (
            <p className="input-warning">닉네임은 최소 두글자입니다</p>
          )}
        </div>
        <MainButton text={"닉네임 설정"} onClick={onClickSetting} />
      </div>
    </MainWrapper>
  );
};

export default Index;
