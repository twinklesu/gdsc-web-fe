import React from "react";
import styled from "styled-components";

import BoardBox from "../../../layout/BoardBox.jsx";

import { dummyRealtime } from "../../../components/dummyData.js";

const BoardWrapper = styled.div`
  display: block;
`;

const SliderPromotion = () => {
  return (
    <BoardWrapper>
      {/* 나중에 백엔드 연결하면 그냥 contents만 연결 */}
      <BoardBox title="인기 게시물" contents={dummyRealtime} to="" />
      <BoardBox title="스터디" contents={dummyRealtime} to="/" />
    </BoardWrapper>
  );
};

export default SliderPromotion;
