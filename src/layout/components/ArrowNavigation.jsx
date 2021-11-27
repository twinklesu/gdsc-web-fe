import React from "react";
import styled from "styled-components";
import { COLORS } from "../../components/Colors";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

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

const ArrowNavigation = ({ pageName, back }) => {
  let history = useHistory();
  return (
    <NavWrapper>
      <button className="back" onClick={() => history.goBack()}>
        <img src={arrowImg} alt="뒤로가기" />
      </button>
      <p>{pageName}</p>
    </NavWrapper>
  );
};

export default ArrowNavigation;
