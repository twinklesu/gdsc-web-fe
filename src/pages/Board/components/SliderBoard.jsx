import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";

import PinItem from "./PinItem";

import { dummyPin } from "../../../components/dummyData.js";

const BoardWrapper = styled.div`
  display: block;
  margin-left: 10px;
  margin-right: 10px;
`;

const SliderBoard = () => {
  const pinId = [
    "isFree",
    "isSecret",
    "isGraudate",
    "isFreshman",
    "isIssue",
    "isInfo",
  ];
  return (
    <BoardWrapper className="board-wrapper">
      {dummyPin.map((value, index) => (
        <PinItem title={value.title} id={pinId[index]} categoryId={index} />
      ))}
    </BoardWrapper>
  );
};

export default SliderBoard;
