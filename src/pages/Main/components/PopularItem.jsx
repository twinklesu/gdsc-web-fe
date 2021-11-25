import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import likeIcon from "../../../assets/icon/like.png";
import commentIcon from "../../../assets/icon/comment.png";
import { COLORS } from "../../../components/Colors";

const ContentWrapper = styled.div`
  display: block;
  margin-bottom: 20px;

  .contents {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }

  .popular-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;

    .popular-num {
      display: flex;
    }
    img {
      width: 15px;
      margin-left: 5px;
    }
  }
`;

// title: "나 오늘 생일이다",
// date: "14:18",
// like: 10,
// comments: 20,

const PopularItem = ({ content }) => {
  return (
    <ContentWrapper>
      <Link to={`/board/detail/${content.id}`}>
        <p className="contents">{content.title}</p>
        <div className="popular-bottom">
          <p className="date">{content.date}</p>
          <div className="popular-num">
            <img src={likeIcon} />
            <p className="like-num">{content.like_num}</p>
            <img src={commentIcon} />
            <p className="comments-num">{content.comment_num}</p>
          </div>
        </div>
      </Link>
    </ContentWrapper>
  );
};

export default PopularItem;
