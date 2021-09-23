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
  }
`;

const ValidateEmail = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const onChangeId = (e) => {
    const { value } = e.target;

    const at = /[@]/;
    const dot = /[.]/;
    const patternEng = /[a-zA-Z]/;

    if (!at.test(value) || !dot.test(value) || !patternEng.test(value)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    setEmail(value);
  };
  return (
    <InputWrapper>
      <h1>이메일</h1>
      <MainInput
        type="text"
        value={email}
        onChange={onChangeId}
        placeholder="이메일을 입력해주세요"
      />
      {isError && <p>이메일 주소를 다시 확인해주세요</p>}
    </InputWrapper>
  );
};

export default ValidateEmail;
