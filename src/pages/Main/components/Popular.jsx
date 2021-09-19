import React from "react";
import styled from "styled-components";

import PopularItem from "./PopularItem";

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


const Popular = ({contents}) => {
    return (
        <BoardWrapper className="board-wrapper">
            <h1 className="title">HOT 게시물</h1>
            <div>
                { contents.map((content, index) => (
                        <PopularItem content={content}/>
                    )
                    )}
            </div>
        </BoardWrapper>
    );
};

export default Popular;