import React from "react";
import styled from "styled-components";
import { COLORS } from "../../components/Colors";
import { Link } from "react-router-dom";

import arrowImg from "../../assets/vector/arrow.svg";

const NavWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  margin-top: 5px;
      img {
        width: 24px;
        height: 24px;
        transform: rotate(180deg);
      }
      p {
          font-size: 20px;
          margin-left: 20px;
      }

  }
`;

const MyPageNavigation = () => {
  return (
    <NavWrapper>
      <Link className="back" to="/">
        <img src={arrowImg} alt="뒤로가기" />
      </Link>
      <p>내 정보</p>
    </NavWrapper>
  );
};

export default MyPageNavigation;
