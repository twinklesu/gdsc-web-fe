import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import xVector from "../../assets/vector/xVector.svg";

const MainWrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;

  img {
    width: 20px;
  }
  h1 {
    font-size: 16px;
    font-weight: bold;
  }
`;

const XvectorNavigation = ({ pageName, back }) => {
  return (
    <MainWrapper>
      <h1>{pageName}</h1>
      <Link to={back}>
        <img src={xVector} alt="닫기" />
      </Link>
    </MainWrapper>
  );
};

export default XvectorNavigation;
