import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import arrowImg from "../../assets/vector/arrow.svg";
import { COLORS } from "../../components/Colors";
import searchImg from "../../assets/nav/search.svg";

const NavigationWrapper = styled.div`
  display: flex;
  height: 55px;
  background-color: white;
  padding-top: 10px;
  margin-top: 5px;
  justify-content: space-between;

  .back-img {
    width: 24px;
    height: 24px;
    transform: rotate(180deg);
  }

  .search-img {
    width: 24px;
    height: 24px;
  }

  .title {
      display: block;
      text-align: center;
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

const BoardTopNavigation = ({ title, back, categoryId }) => {
  return (
    <NavigationWrapper>
      <Link className="back" to={back}>
        <img className="back-img" src={arrowImg} alt="뒤로가기" />
      </Link>
      <div className="title">
        <h1>{title}</h1>
        <h2>GDSC</h2>
      </div>
      <Link className="search" to={`/search/${categoryId}`}>
        <img className="search-img" src={searchImg} alt="검색" />
      </Link>
    </NavigationWrapper>
  );
};

export default BoardTopNavigation;
