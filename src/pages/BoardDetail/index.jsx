import React from "react";
import styled from "styled-components";

import BoardDetailTopNavigation from "../../layout/components/BoardDetailTopNavigation";
import profileImg from "../../assets/img/temp.png";
import likeIcon from "../../assets/icon/like.png";
import commentIcon from "../../assets/icon/comment.png";
import { COLORS } from "../../components/Colors.js";

const MainWrapper = styled.div`
  .content-top {
    diplay: flex;
    width: 100%;
    margin-bottom: 10px;
    .profile-img {
      height: 30px;
      border-radius: 5px;
      margin-right: 10px;
    }
    .content-top-info {
      display: inline-block;
    }
  }
  .content-wrapper {
    margin-bottom: 20px;
    .title {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
    .popular-num {
      margin-bottom: 10px;
      display: flex;
      img {
        width: 15px;
        margin-left: 5px;
      }
    }
    .agree-btn {
      background-color: ${COLORS.grey_300};
      text-align: center;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
      border-radius: 8px;
      color: ${COLORS.grey_600};
      font-size: 12px;
    }

    .comment-wrapper{
      margin-top: 30px;
      .comment-item {
        border-top: solid 1px ${COLORS.grey_400};
        padding-left: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        .comment-top {
          display: flex;
          margin-bottom: 5px;
          justify-content: space-between;
          div {
            display: flex;
          }
          .comment-pic {
            height: 20px;
            border-radius: 5px;
            margin-right: 10px;
          }
          .comment-nickname{
            font-weight: bold;
          }
          .comment-agree-btn {
            background-color: ${COLORS.grey_300};
            text-align: center;
            padding-left: 5px;
            padding-right: 5px;
            padding-top: 5px;
            padding-bottom: 5px;
            border-radius: 8px;
            color: ${COLORS.grey_600};
            font-size: 12px;
          }
        }
        .comment-content {
          margin-bottom: 5px;
        }
        .comment-bottom {
          display: flex;
          .comment-like-img {
            margin-left: 10px;
            width: 13px;
            margin-left: 5px;
          }
          .comment-like-num {
              display: inline-block;
              margin-left: 5px;
              color: ${COLORS.red};
              font-size: 14px;
          }
        }
      }
      .comment-input-wrapper{
        display: flex;
        justify-content: space-between;
        background-color: ${COLORS.grey_300};
        .comment-input {
          background-color: ${COLORS.grey_300};
          padding-top: 5px;
          padding-bottom: 5px;
          padding-left: 5px;
          border-radius: 5px;
        }
      } 

    }

  }
`;

const dummyContent = {
  title: "아 집에 가고싶다",
  content:
    "오늘 그래도 리엑트 과제 끝내야지ㅜㅜ 내일 알고리즘하고 도커 발표 연습해야지",
  like: 10,
  comments: 2,
  date: "10/10 01:04",
  nickname: "익명",
};

const dummyComment = [
  {
    nickname: "익명",
    content: "집갈때 건전지 안사면 난 머저리",
    date: "10/10 01:10",
    like: 0,
  },
  {
    nickname: "익명",
    content: "그래도 위에 짜는데 6분밖에 안걸렸네 ㅋㅎ",
    date: "10/10 01:11",
    like: 2,
  },
];

const Index = () => {
  return (
    <MainWrapper>
      <BoardDetailTopNavigation
        title="게시판이름"
        back="/board/list/0"
        categoryId={0}
      />
      <div className="content-top">
        <img className="profile-img" src={profileImg} alt="프로필 사진" />
        <div className="content-top-info">
          <p className="nickname">{dummyContent.nickname}</p>
          <p className="date">{dummyContent.date}</p>
        </div>
      </div>

      <div className="content-wrapper">
        <h1 className="title">{dummyContent.title}</h1>
        <p className="content">{dummyContent.content}</p>
      </div>
      <div className="popular-num">
        <img src={likeIcon} alt="공감" />
        <p className="like-num">{dummyContent.like}</p>
        <img src={commentIcon} alt="댓글" />
        <p className="comments-num">{dummyContent.comments}</p>
      </div>
      <button className="agree-btn" onClick={() => alert("공감을 눌렀습니다.")}>
        공감
      </button>
      <div className="comment-wrapper">
        {dummyComment.map((comment, index) => (
          <div className="comment-item">
            <div className="comment-top">
              <div>
                <img
                  className="comment-pic"
                  src={profileImg}
                  alt="댓글 프로필 이미지"
                />
                <p className="comment-nickname">{comment.nickname}</p>
              </div>
              <button
                className="comment-agree-btn"
                onClick={() => alert("댓글 공감")}
              >
                공감
              </button>
            </div>
            <p className="comment-content">{comment.content}</p>
            <div className="comment-bottom">
              <p className="date">{comment.date}</p>
              {comment.like !== 0 && (
                <div>
                  <img
                    src={likeIcon}
                    alt="댓글 좋아요 수"
                    className="comment-like-img"
                  />
                  <p className="comment-like-num">{comment.like}</p>
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="comment-input-wrapper">
          <p>익명체크박스</p>
          <input
            className="comment-input"
            placeholder="댓글을 입력하세요."
            tpye="text"
          />
          <p>종이비행기</p>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Index;
