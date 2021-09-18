import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";

import RealTimeItem from "./RealTimeItem";

const BoardWrapper = styled.div`
    display: block;
    margin-top: 20px;

    .title {
        float: left;
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 20px;
        width: 100%;
    }
`;

const RealTimeBoard = ({contents}) => {
    return (
        <BoardWrapper className="board-wrapper">
            <h1 className="title">실시간 인기 글</h1>
            <div>
                { contents.map((content, index) => (
                        <RealTimeItem content={content}/>
                    )
                    )}
            </div>
        </BoardWrapper>
    );
};

export default RealTimeBoard;