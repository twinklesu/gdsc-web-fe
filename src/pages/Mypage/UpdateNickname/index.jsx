import React, { useState } from "react";
import styled from "styled-components";

import TopNavigation from "../../../layout/TopNavigation";
import MainButton from "../../../components/Button/MainButton";
import MainInput from "../../../components/Input/MainInput";

const MainWrapper = styled.div`
  display: block;
`;

const Index = () => {
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

  return (
    <MainWrapper>
      <TopNavigation activePage="updateNick" />
      <div className="main">
        <h1 className="title">닉네임 입력</h1>
        <div className="input-wrapper">
          <MainInput
            value={nickname}
            type="text"
            onChange={onChangeNickname}
            placeholder="변경할 닉네임을 입력해주세요"
          />
          {isError && <p>닉네임은 최소 두글자입니다</p>}
        </div>
        <MainButton text={"닉네임 설정"} onClick={() => alert("닉네임 설정")} />
      </div>
    </MainWrapper>
  );
};

export default Index;
