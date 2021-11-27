import React from "react";
import styled from "styled-components";

import { COLORS } from "../Colors";

const CustomInput = styled.input`
  width: calc(100% - 32px);
  height: 32px;
  background: ${COLORS.grey_300};
  border-radius: 10px;
  padding: 0px 16px; // top, right, bottom, left
  font-size: 14px;
  border: 0px;
  margin-top: 5px;

  //input::placeholder
  &::placeholder {
    color: ${COLORS.grey_500};
    font-weight: 400;
    font-size: 14px;
  }
`;

const MainInput = ({
  value,
  type,
  onChange,
  handleFocus,
  placeholder,
  onKeyPress,
}) => {
  return (
    <CustomInput
      value={value}
      type={type}
      onChange={onChange}
      onBlur={handleFocus} // 창이 focus 잃은 경우
      onFocus={handleFocus} // 그 창이 focus 갖은 경우
      placeholder={placeholder}
      spellCheck={false}
      onKeyPress={onKeyPress}
    />
  );
};

export default MainInput;
