import React from "react";
import styled from "styled-components";

import { COLORS } from "../../../components/Colors";

const LineText = styled.h2`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${(props) => (props.isActive ? "underline" : "none")};
  color: ${(props) => (props.isActive ? COLORS.black : COLORS.grey_600)};
`;

const UnderLine = ({ text, isActive }) => {
  return (
    <div>
      <LineText isActive={isActive}>{text}</LineText>
    </div>
  );
};

export default UnderLine;
