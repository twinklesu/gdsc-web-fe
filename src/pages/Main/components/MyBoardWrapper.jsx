import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";

import MyBoardItem from "./MyBoardItem";

const MyBoardWrapper = ({ myBoard }) => {
  const [pin, setPin] = useState({
    isFree: true,
    isSecret: true,
    isGraudate: true,
    isFreshman: true,
    isIssue: true,
    isInfo: true,
  });

  useEffect(() => {
    const defaultPin = {
      isFree: true,
      isSecret: true,
      isGraudate: true,
      isFreshman: true,
      isIssue: true,
      isInfo: true,
    };
    const storage = window.localStorage.getItem("pin");

    if (!storage) {
      window.localStorage.setItem("pin", JSON.stringify(defaultPin));
    } else {
      const storageJson = JSON.parse(storage);
      setPin({
        isFree: storageJson.isFree,
        isSecret: storageJson.isSecret,
        isGraudate: storageJson.isGraudate,
        isFreshman: storageJson.isFreshman,
        isIssue: storageJson.isIssue,
        isInfo: storageJson.isInfo,
      });
    }
  }, []);

  const pinId = {
    자유게시판: "isFree",
    비밀게시판: "isSecret",
    졸업생게시판: "isGraudate",
    새내기게시판: "isFreshman",
    "시사 이슈": "isIssue",
    정보게시판: "isInfo",
  };

  return (
    <div>
      {myBoard.map(
        (board, index) =>
          // <p>{pinId[board.category]}</p>
          pin[pinId[board.category]] && (
            <MyBoardItem board={board} index={index} />
          )
      )}
    </div>
  );
};

export default MyBoardWrapper;
