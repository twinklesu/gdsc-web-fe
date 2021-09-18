import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";

import MyBoardWrapper from "./MyBoardWrapper";

const BoardWrapper = styled.div`
    display: block;
    margin-top: 20px;

    .top-nav {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        .title {
            float: left;
            font-weight: bold;
            font-size: 18px;
        }
        .to-more {
            float: right;
            h3 {
                font-size: 16px;
                color: ${COLORS.red};
            }
        }

    }
`;

const MyBoard = ({myBoard}) => {
    return (
        <BoardWrapper className="board-wrapper">
            <div className="top-nav">
                <h1 className="title">즐겨찾는 게시판</h1>
                <div className="to-more">
                    <Link to="/board">
                        <h3>더 보기 &gt;</h3>
                    </Link>
                </div>
            </div>
        <div>
            <MyBoardWrapper myBoard={myBoard}/>
        </div>
        </BoardWrapper>
    );
};

export default MyBoard;