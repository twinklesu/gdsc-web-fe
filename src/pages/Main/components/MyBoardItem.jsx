import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";
import newIcon from "../../../assets/icon/new.png";


// category: "자유게시판",
// title: "기숙사 예비 받았는데",
// isNew: true,

const BoardItemWrapper = styled.div`
    
    .my-board {
        display: flex;
        margin-bottom: 15px;
    }
    h1 {
        margin-right: 20px;
        font-weight: bold;
        white-space: nowrap;
    }
    .board-content {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .new-icon {
        width: 20px;
    }
`;


const MyBoardItem = ({board}) => {
    const hasNewIcon = board.isNew?newIcon:'';
    return (
        <BoardItemWrapper>
            <Link to={`board/${board.id}`} className="my-board">
                <h1 className="board-title">{board.category}</h1>
                <p className="board-content">{board.title}</p>
                <img className="new-icon" src={hasNewIcon}/>
            </Link>
        </BoardItemWrapper>
    );
};

export default MyBoardItem;