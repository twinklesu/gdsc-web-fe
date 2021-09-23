import React from "react";
import styled from "styled-components";

import xVector from "../../../assets/vector/xVector.svg";
import MainButton from "../../../components/Button/MainButton";
import ValidatePassword from "./components/ValidatePassword";
import ValidateId from "./components/ValidateId";
import MainInput from "../../../components/Input/MainInput";
import ValidateEmail from "./components/ValidateEmail";

const JoinWrapper = styled.div`
  display: block;
  margin-top: 20px;

  .join-top {
    display: flex;
    justify-content: space-between;
    img {
      width: 20px;
    }
    h1 {
      font-size: 16px;
      font-weight: bold;
    }
  }

  .join-input {
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
    h1 {
      font-size: 13px;
      margin-top: 15px;
      margin-bottom: 5px;
    }
  }
`;

const Index = () => {
  return (
    <JoinWrapper>
      <div className="join-top">
        <h1>회원가입</h1>
        <img src={xVector} alt="닫기" />
      </div>
      <div class="InputWrapper"></div>
      <div className="join-input">
        <ValidateId />
        <ValidatePassword />
        <h1>이름</h1>
        <MainInput type="text" placeholder="이름을 입력해주세요" />
        <ValidateEmail />
        <h1>닉네임</h1>
        <MainInput type="text" placeholder="닉네임을 입력해주세요" />
        <h1>전공</h1>
        <MainInput type="text" placeholder="전공을 입력해주세요" />
      </div>
      <MainButton text={"회원가입"} onClick={() => alert("회원가입")} />
    </JoinWrapper>
  );
};

export default Index;
