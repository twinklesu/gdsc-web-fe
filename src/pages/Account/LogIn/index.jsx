import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";

import MainLogo from "../../../assets/logo/logo.png";
import MainButton from "../../../components/Button/MainButton";
import MainInput from "../../../components/Input/MainInput";
import axios from "axios";

const LoginWrapper = styled.div`
  display: block;
  text-align: center;
  margin-top: 20px;

  p {
    margin-top: 10px;
    font-size: 14px;
    color: ${COLORS.grey_500};
  }
  h1 {
    color: ${COLORS.red};
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: bold;
  }
  .to-join-button {
    margin-top: 20px;
    color: ${COLORS.grey_600};
  }
`;

const CheckInput = () => {
  const [isInput, setIsInput] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const handleFocus = (e) => {
    if (isInput) {
      console.log("false");
      setIsInput(false); // 최초에 false였으니까..
    } else {
      console.log("true");
      setIsInput(true);
    }
  };

  const onClickLoginBtn = async () => {
    const loginResult = await axios({
      method: "POST",
      url: `/api/user/login`,
      data: {
        user_id: id,
        password: pw,
      },
    });
    console.log(`result: ${loginResult.data.success}`);
    if (loginResult.data.success) {
      // 성공
      document.location.href = "/";
    } else {
      // 실패
      alert("잘못된 아이디 혹은 비밀번호 입니다.");
      window.location.reload();
    }
  };

  const onEnterPress = (e) => {
    e.key === "Enter" && onClickLoginBtn();
  };

  return (
    <div>
      <div>
        <img src={MainLogo} alt="에브리타임 로고" />
        <p>대학 생활을 더 편리하고 즐겁게</p>
        <h1>에브리타임</h1>
      </div>
      <MainInput
        type="text"
        value={id}
        onChange={onChangeId}
        handleFocus={handleFocus}
        placeholder="아이디"
        onKeyPress={onEnterPress}
      />
      <MainInput
        type="password"
        value={pw}
        onChange={onChangePw}
        handleFocus={handleFocus}
        placeholder="비밀번호"
        onKeyPress={onEnterPress}
      />
      <MainButton text={"에브리타임 로그인"} onClick={onClickLoginBtn} />
      {!isInput && (
        <div className="to-join-button">
          <Link to="/signup">회원가입</Link>
        </div>
      )}
    </div>
  );
};

const Index = () => {
  return (
    <LoginWrapper>
      <CheckInput />
    </LoginWrapper>
  );
};

export default Index;
