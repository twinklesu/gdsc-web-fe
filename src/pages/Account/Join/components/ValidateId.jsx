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

const ValidateId = () => {
  const [id, setId] = useState("");
  const [isError, setIsError] = useState(false);

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
      setIsError(true);
    } else {
      setIsError(false);
    }
    setId(value);
  };
  return (
    <InputWrapper>
      <h1>아이디</h1>
      <MainInput
        type="text"
        value={id}
        onChange={onChangeId}
        placeholder="아이디를 입력해주세요."
      />
      {isError && (
        <p>아이디는 영어 대소문자, 숫자로 구성된 6~20자만 가능합니다.</p>
      )}
    </InputWrapper>
  );
};

export default ValidateId;
