import React, { useState } from "react";
import styled from "styled-components";

import MainButton from "../../../components/Button/MainButton";
import MainInput from "../../../components/Input/MainInput";
import { COLORS } from "../../../components/Colors";

import TopNavigation from "../../../layout/TopNavigation";

const MainWrapper = styled.div`
  display: block;
  margin-top: 20px;

  .join-input {
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
    h1 {
      font-size: 13px;
      margin-top: 15px;
      margin-bottom: 5px;
    }
    p {
      font-size: 14px;
      color: ${COLORS.red};
    }
  }
`;

const Index = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [major, setMajor] = useState("");

  const [errorNum, setErrorNum] = useState(0);

  const onChangeId = (e) => {
    const { value } = e.target;

    const patternEng = /[a-zA-Z]/;
    const patternNum = /[0-9]/;

    if (
      !patternEng.test(value) ||
      !patternNum.test(value) ||
      value.length < 6 ||
      value.length > 21
    ) {
      setErrorNum(2);
    } else {
      setErrorNum(0);
    }
    setId(value);
  };

  const onChangePassword = (e) => {
    const patternSpecial = /[~!@#$%^&*()_+|<>?:{}]/;
    const patternEng = /[a-zA-Z]/;
    const patternNum = /[0-9]/;

    const { value } = e.target;

    if (
      !patternSpecial.test(value) ||
      !patternNum.test(value) ||
      !patternEng.test(value)
    ) {
      setErrorNum(1);
    } else {
      setErrorNum(0);
    }
    setPassword(value);
  };

  const onChangeRePassword = (e) => {
    const { value } = e.target;

    if (value === password) {
      setErrorNum(0);
    } else {
      setErrorNum(3);
    }
    setRePassword(value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    const { value } = e.target;

    const at = /[@]/;
    const dot = /[.]/;
    const patternEng = /[a-zA-Z]/;

    if (!at.test(value) || !dot.test(value) || !patternEng.test(value)) {
      setErrorNum(4);
    } else {
      setErrorNum(0);
    }
    setEmail(value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  const onChangeMajor = (e) => {
    setMajor(e.target.value);
  };

  return (
    <MainWrapper>
      <TopNavigation activePage="join" />
      <div className="join-input">
        <h1>아이디</h1>
        <MainInput
          value={id}
          type="text"
          onChange={onChangeId}
          placeholder="아이디를 입력해주세요."
        />
        {errorNum === 2 && (
          <p>아이디는 영어 대소문자, 숫자로 구성된 6~20자만 가능합니다</p>
        )}
        <h1>비밀번호</h1>
        <MainInput
          value={password}
          type="password"
          onChange={onChangePassword}
          placeholder="비밀번호를 입력해주세요."
        />
        {errorNum === 1 && <p>비밀번호를 조건에 맞춰 입력해주세요</p>}
        <h1>비밀번호 확인</h1>
        <MainInput
          value={rePassword}
          type="password"
          onChange={onChangeRePassword}
          placeholder="비밀번호를 다시 입력해주세요."
        />
        {errorNum === 3 && <p>비밀번호가 일치하지 않습니다</p>}
        <h1>이름</h1>
        <MainInput
          value={name}
          type="text"
          onChange={onChangeName}
          placeholder="이름을 입력해주세요."
        />
        <h1>이메일</h1>
        <MainInput
          value={email}
          type="text"
          onChange={onChangeEmail}
          placeholder="이메일을 입력해주세요."
        />
        {errorNum === 4 && <p>이메일 주소를 다시 확인해주세요</p>}
        <h1>닉네임</h1>
        <MainInput
          value={nickname}
          type="text"
          onChange={onChangeNickname}
          placeholder="닉네임을 입력해주세요."
        />
        <h1>전공</h1>
        <MainInput
          value={major}
          type="text"
          onChange={onChangeMajor}
          placeholder="전공을 입력해주세요."
        />
      </div>
      <MainButton text="회원가입" onClick={() => alert("회원가입")} />
    </MainWrapper>
  );
};

export default Index;
