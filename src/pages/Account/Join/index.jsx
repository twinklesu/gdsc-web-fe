import React from "react";
import styled from "styled-components";

import xVector from "../../../assets/vector/xVector.svg";

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
`;

const Index = () => {
  return (
    <JoinWrapper>
      <div className="join-top">
        <h1>회원가입</h1>
        <img src={xVector} alt="닫기" />
      </div>
    </JoinWrapper>
  );
};

export default Index;
