import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../../../components/Colors";

import MainInput from "../../../../components/Input/MainInput";

const InputWrapper = styled.div`
  p {
    font-size: 14px;
    color: ${COLORS.red};
  }
  h1 {
    font-size: 13px;
    margin-bottom: 5px;
    margin-top: 15px;
  }
`;

const ValidatePassword = () => {
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [checkPassword, setCheckPassword] = useState("");
  const [isConfirm, setIsConfirm] = useState(false);

  const onChangePassword = (e) => {
    const { value } = e.target;

    const patternSpecial = /[~!@#$%^&*()_+<>?|:{}]/;
    const patternEng = /[a-zA-Z]/;
    const patternNum = /[0-9]/;

    if (
      !patternSpecial.test(value) ||
      !patternEng.test(value) ||
      !patternNum.test(value) ||
      value.length < 8 ||
      value.length > 13
    ) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    setPassword(value);
  };

  const onChangeCheckPassword = (e) => {
    const { value } = e.target;

    if (value === password) {
      setIsConfirm(true);
    } else {
      setIsConfirm(false);
    }
    setCheckPassword(value);
  };

  return (
    <InputWrapper>
      <h1>비밀번호</h1>
      <MainInput
        type="password"
        value={password}
        onChange={onChangePassword}
        placeholder="비밀번호를 입력해주세요."
      />
      {isError && (
        <p>
          비밀번호는 영어 대소문자, 숫자, 특수기호를 포함한 8~12자만 가능합니다.
        </p>
      )}
      <h1>비밀번호 확인</h1>
      <MainInput
        type="password"
        value={checkPassword}
        onChange={onChangeCheckPassword}
        placeholder="비밀번호를 다시 한번 입력해주세요."
      />
      {!isConfirm && <p>비밀번호를 다시 한번 확인해주세요.</p>}
    </InputWrapper>
  );
};

export default ValidatePassword;
