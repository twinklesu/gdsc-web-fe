import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";

import MyBoardItem from "./MyBoardItem";

const MyBoardWrapper = ({myBoard}) => {
    return (
        <div>
            { myBoard.map((board, index) => (
                <MyBoardItem board={board}/>
            )
            )}
        </div>
    );
};

export default MyBoardWrapper;