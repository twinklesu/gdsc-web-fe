import React, { useState, useEffect } from "react";
import styled from "styled-components";

import BoardDetailTopNavigation from "../../layout/components/BoardDetailTopNavigation";
import profileImg from "../../assets/img/temp.png";
import likeIcon from "../../assets/icon/like.png";
import commentIcon from "../../assets/icon/comment.png";
import { COLORS } from "../../components/Colors.js";
import sendIcon from "../../assets/icon/send.png";
import axios from "axios";
import { boardCategoryIds } from "../../components/boardCategoryId";
import { useHistory } from "react-router";

const MainWrapper = styled.div`
  .content-top {
    diplay: table;
    width: 100%;
    margin-bottom: 10px;
    vertical-align: middle;
    .profile-img {
      height: 30px;
      border-radius: 5px;
      margin-right: 10px;
    }
    .nickname {
      display: table-cell;
      padding-bottom: 5px;
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
        background-color: ${COLORS.grey_200};
        padding: 10px 10px 10px 10px ;
        border-radius: 5px;
        align-self: center;
        position: fixed;
        bottom: 10px;
        .comment-input {
          caret-color: #c62917;
          width: 400px;
          display: inline;
        }
        .input-wrapper {
          margin-left: 10px;
          display: flex;
          align-items: center;
        }
        .comment-secret {
          display: flex;
          width: fit-content;
          height: fit-content;
          label { 
            color: ${(props) =>
              props.isSecret ? COLORS.red : COLORS.grey_400};
            margin-left: 5px;
          }
          input[type="checkbox"] {
            display: inline-block;
            width: 12px;
            height: 12px;
            border: 1px solid ${COLORS.grey_400};
            border-radius: 2px;
            align-self: center;
          }
          input[type="checkbox"]:checked {
            width: 12px;
            height: 12px;
            background-color:${COLORS.red};
            border: 1px solid ${COLORS.red};
            border-raidus: 2px;
            align-self: center;
          }
        }
        img {
          width: 20px;
        }
      } 

    }
  }
`;

const Index = ({ match }) => {
  let history = useHistory();
  const [isSecret, setIsSecret] = useState(true);
  const [content, setContent] = useState([]);
  const [comments, setComments] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [newComment, setNewComment] = useState("");

  const onChangeCheck = (e) => {
    if (e.target.checked) {
      setIsSecret(true);
      console.log(isSecret);
    } else {
      setIsSecret(false);
      console.log(isSecret);
    }
  };

  const onChangeComment = (e) => {
    setNewComment(e.target.value);
  };

  const agreeFunction = async ({ cat, ref_id }) => {
    const agreeResult = await axios({
      method: "POST",
      url: "/api/like",
      data: {
        category: cat,
        ref_id: ref_id,
      },
    });
    console.log(`ref_id: ${ref_id}`);
    console.log(agreeResult.data);
    if (agreeResult.data.success) {
      window.location.reload();
    } else {
      alert(agreeResult.data.message);
    }
  };

  const onClickPostAgreeBtn = () => {
    const postId = match.params.id;
    agreeFunction({ cat: 1, ref_id: postId });
  };

  const onClickCommentAgreeBtn = ({ id }) => {
    agreeFunction({ cat: 2, ref_id: id });
  };

  const commentPostFunction = async () => {
    const commentResult = await axios({
      method: "POST",
      url: "/api/board/comment",
      data: {
        board_id: match.params.id,
        content: newComment,
        is_secret: isSecret,
      },
    });
    if (commentResult.data.success) {
      window.location.reload();
    }
  };

  const onClickCommentPost = () => {
    if (newComment === "") {
      alert("댓글을 입력해주세요.");
    } else {
      commentPostFunction();
    }
  };

  useEffect(() => {
    const id = match.params.id;

    const fetchData = async () => {
      const result = await axios(`/api/board/detail/${id}`);
      setContent(result.data.data);
      console.log(result.data.data);
      setCategoryId(result.data.data.board_category_id);
      const commentResult = await axios(`/api/board/${id}/comment`);
      setComments(commentResult.data.data);
      console.log(commentResult.data.data);
    };
    fetchData();
  }, []);

  return (
    <MainWrapper isSecret={isSecret}>
      <BoardDetailTopNavigation
        title={boardCategoryIds[categoryId]}
        back={`/board/list/${categoryId}`}
        categoryId={categoryId}
      />
      <div className="content-top">
        <img className="profile-img" src={profileImg} alt="프로필 사진" />
        <div className="content-top-info">
          <p className="nickname">{content.nickname}</p>
          <p className="date">{content.date}</p>
        </div>
      </div>

      <div className="content-wrapper">
        <h1 className="title">{content.title}</h1>
        <p className="content">{content.content}</p>
      </div>
      <div className="popular-num">
        <img src={likeIcon} alt="공감" />
        <p className="like-num">{content.like_num}</p>
        <img src={commentIcon} alt="댓글" />
        <p className="comments-num">{content.comment_num}</p>
      </div>
      <button className="agree-btn" onClick={onClickPostAgreeBtn}>
        공감
      </button>
      <div className="comment-wrapper">
        {comments.map((comment, index) => (
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
                onClick={() => onClickCommentAgreeBtn({ id: comment.id })}
              >
                공감
              </button>
            </div>
            <p className="comment-content">{comment.content}</p>
            <div className="comment-bottom">
              <p className="date">{comment.date}</p>
              {comment.like_num !== 0 && (
                <div>
                  <img
                    src={likeIcon}
                    alt="댓글 좋아요 수"
                    className="comment-like-img"
                  />
                  <p className="comment-like-num">{comment.like_num}</p>
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="comment-input-wrapper">
          <div className="comment-secret">
            <input
              type="checkbox"
              name="isSecret"
              id="isSecret"
              checked={isSecret}
              onChange={onChangeCheck}
            />
            <label htmlFor="isSecret">익명</label>
          </div>
          <div className="input-wrapper">
            <input
              className="comment-input"
              placeholder="댓글을 입력하세요."
              type="text"
              onChange={onChangeComment}
            />
            <img src={sendIcon} alt="댓글 입력" onClick={onClickCommentPost} />
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Index;
