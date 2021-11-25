import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { dummyRealtime } from "../../components/dummyData";
import TopNavigation from "../../layout/TopNavigation";
import { Link } from "react-router-dom";

import likeIcon from "../../assets/icon/like.png";
import commentIcon from "../../assets/icon/comment.png";
import { COLORS } from "../../components/Colors";
import profileImg from "../../assets/img/temp.png";
import BoardTopNavigation from "../../layout/components/BoardTopNavigation";
import pencilImg from "../../assets/icon/pencil.svg";
import axios from "axios";
import { boardCategoryIds } from "../../components/boardCategoryId";

const MainWrapper = styled.div`
  height: 100%;
  .write-wrapper {
    display: inline-block;
    background-color: ${COLORS.grey_200};
    border: 1px solid ${COLORS.grey_400};
    padding: 10px 15px 10px 15px;
    margin-left: 180px;
    width: fit-content;
    border-radius: 20px;
    position: fixed;
    bottom: 10px;
    .write-img {
      width: 15px;
    }
    p {
      display: inline-block;
      width: fit-content;
      margin-left: 5px;
    }
  }
`;

const ContentWrapper = styled.div`
.popular-top {
    diplay: flex;
    width: 100%
    justify-content: space-between;
    margin-bottom: 8px;
    margin-top: 10px;

    img {
        height: 20px;
        margin-right: 10px;
    }
    .profile {
        display:inline-block;
    }
    p {
        float: right;
        display:inline-block;
    }
}

  .content {
    height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }

  .title {
    height: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: solid 1px ${COLORS.grey_500};

    .popular-num {
      display: flex;
    }
    img {
      width: 15px;
      margin-left: 5px;
    }
  }

`;

const Index = ({ match }) => {
  const [boardList, setBoardList] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    const categoryId = match.params.category;
    console.log(match.params.category);

    const fetchData = async () => {
      setCategoryId(categoryId);
      const result = await axios(`/api/board?category=${categoryId}`);
      setBoardList(result.data.data);
    };
    fetchData();
  }, []);

  console.log(boardList);

  return (
    <MainWrapper>
      <BoardTopNavigation
        title={boardCategoryIds[categoryId]}
        back="/"
        categoryId={categoryId}
      />
      <div className="main-wrapper">
        <ContentWrapper>
          {boardList.map((content, index) => (
            <Link to={`/board/detail/${content.id}`}>
              <div className="popular-top">
                <div className="profile">
                  <img src={profileImg} alt="프로필 이미지" />
                  <p className="nickname">{content.nickname}</p>
                </div>
                <p className="date">{content.created_at}</p>
              </div>
              <p className="title">{content.title}</p>
              <p className="content">{content.content}</p>
              <div className="bottom">
                <p className="date">{""}</p>
                <div className="popular-num">
                  <img src={likeIcon} alt="공감" />
                  <p className="like-num">{content.like_num}</p>
                  <img src={commentIcon} alt="댓글" />
                  <p className="comments-num">{content.comment_num}</p>
                </div>
              </div>
            </Link>
          ))}
        </ContentWrapper>
      </div>
      <div className="write-wrapper">
        <Link className="write-btn" to={`/board/post/${categoryId}`}>
          <img src={pencilImg} className="write-img" alt="글 작성" />
          <p>글 쓰기</p>
        </Link>
      </div>
    </MainWrapper>
  );
};

export default Index;
