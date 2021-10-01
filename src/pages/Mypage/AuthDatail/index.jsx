import React, { useState } from "react";
import styled from "styled-components";

import TopNavigation from "../../../layout/TopNavigation";
import MainInput from "../../../components/Input/MainInput";
import MainButton from "../../../components/Button/MainButton";
import { COLORS } from "../../../components/Colors";

const MainWrapper = styled.div`
  display: block;

  .title {
    color: ${COLORS.grey_text};
    font-size: 12px;
  }
  .input-wrapper {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

const Index = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const onChangeEmail = (e) => {
    const { value } = e.target;

    const seoultech = "@seoultech.ac.kr";
    const patternEngNum = /[a-zA-Z0-9]/;

    if (!value.includes(seoultech) || !patternEngNum.test(value)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    setEmail(value);
  };

  return (
    <MainWrapper>
      <TopNavigation activePage="authDetail" />
      <div className="main">
        <h1 className="title">이메일 입력</h1>
        <div className="input-wrapper">
          <MainInput
            value={email}
            type="text"
            onChange={onChangeEmail}
            placeholder="학교 메일을 입력해주세요"
          />
          {isError && (
            <p className="input-warning">
              이메일이 적합하지 않습니다. 다시 입력해주세요.
            </p>
          )}
        </div>
        <MainButton
          text={"이메일 보내기"}
          onClick={() => alert("이메일 보내기")}
        />
      </div>
    </MainWrapper>
  );
};

export default Index;
