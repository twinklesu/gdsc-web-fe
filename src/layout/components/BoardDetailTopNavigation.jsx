import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import arrowImg from "../../assets/vector/arrow.svg";
import { COLORS } from "../../components/Colors";
import searchImg from "../../assets/nav/search.svg";

import { useHistory } from "react-router";

const NavigationWrapper = styled.div`
  display: flex;
  height: 55px;
  background-color: white;
  padding-top: 10px;
  margin-top: 5px;

  .back-img {
    width: 24px;
    height: 24px;
    transform: rotate(180deg);
  }
  .title {
      display: block;
      text-align: center;
      width: 100%;
    h1 {
        font-size: 14px;
    }
    h2 {
        font-size: 14px;
        color: ${COLORS.grey_600};
    }

  }


  }
`;

const BoardDetailTopNavigation = ({ title, back, categoryId }) => {
  let history = useHistory();
  return (
    <NavigationWrapper>
      <button className="back" onClick={() => history.goBack()}>
        <img className="back-img" src={arrowImg} alt="뒤로가기" />
      </button>
      <div className="title">
        <h1>{title}</h1>
        <h2>GDSC</h2>
      </div>
    </NavigationWrapper>
  );
};

export default BoardDetailTopNavigation;
