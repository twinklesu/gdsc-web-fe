import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLORS } from "../components/Colors";
import likeIcon from "../assets/icon/like.png";
import commentIcon from "../assets/icon/comment.png";

const BoardWrapper = styled.div`
  display: block;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;

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

`;

const ContentWrapper = styled.div`
  display: block;
  margin-bottom: 20px;

  .content-title {
    font-weight: bold;
  }

  .content {
    height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    .popular-num {
      display: flex;
    }
    img {
      width: 15px;
      margin-left: 5px;
    }
  }
`;

const BoardBox = ({ title, contents, to }) => {
  return (
    <BoardWrapper className="board-wrapper">
      <div className="top-nav">
        <h3 className="title">{title}</h3>
        {to !== "" && (
          <div className="to-more">
            <Link to={to}>
              <h3>더 보기 &gt;</h3>
            </Link>
          </div>
        )}
      </div>
      {console.log(contents)}
      <div>
        {contents.map((content, index) => (
          <ContentWrapper>
            <Link>
              <h1 className="content-title">{content.title}</h1>
              <p className="content">{content.contents}</p>
              <div className="bottom">
                <p className="date">{content.date}</p>
                <div className="popular-num">
                  <img src={likeIcon} alt="공감" />
                  <p className="like-num">{content.like}</p>
                  <img src={commentIcon} alt="댓글" />
                  <p className="comments-num">{content.comments}</p>
                </div>
              </div>
            </Link>
          </ContentWrapper>
        ))}
      </div>
    </BoardWrapper>
  );
};

export default BoardBox;
