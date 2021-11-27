import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router";
import { COLORS } from "../../components/Colors";
import searchIcon from "../../assets/nav/search.svg";
import { boardCategoryIds } from "../../components/boardCategoryId";
import likeIcon from "../../assets/icon/like.png";
import commentIcon from "../../assets/icon/comment.png";
import profileImg from "../../assets/img/temp.png";

import axios from "axios";
import TopNavigation from "../../layout/TopNavigation";

const SearchWrapper = styled.div`
  display: block;
  height: 100%;

  .top-area {
    display: flex;

    .search-area {
      display: flex;
      background-color: ${COLORS.grey_light};
      border-radius: 10px;
      height: 30px;
      width: 100%;
      padding-left: 10px;
      .search-icon {
        width: 24px;
        height: 24px;
        display: inline-block;
        margin-top: 3px;
        margin-right: 10px;
      }
    }
    .cancel-btn {
      width: 40px;
      margin-left: 10px;
    }

    .search-btn {
      width: 40px;
      margin-left: 10px;
    }
  }
  .content-area {
    height: 100%;
    display: block;

    .guide {
      margin-top: 400px;
      color: ${COLORS.grey_text};
    }
  }
`;

const ContentWrapperWrapper = styled.div`
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
  let history = useHistory();
  const [keyword, setKeyword] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [boardList, setBoardList] = useState([]);
  const [isNoResult, setIsNoResult] = useState(false);

  const ContentWrapper = () => {
    return (
      <ContentWrapperWrapper>
        {boardList.map((content, index) => (
          <Link to={`/board/detail/${content.id}`}>
            {console.log(content)}
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
        {isNoResult && (
          <p className="guide arrange-center-center">검색 결과가 없습니다</p>
        )}
      </ContentWrapperWrapper>
    );
  };

  const onClickCancel = () => {
    history.goBack();
  };

  const onClickSearch = () => {
    const searchCategory = match.params.category;
    console.log(keyword);
    const fetchData = async () => {
      const result = await axios(
        `/api/board/search?category=${searchCategory}&keyword=${keyword}`
      );
      setBoardList(result.data.data);
      boardList.length === 0 && setIsNoResult(true);
    };
    fetchData();
  };

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
    if (keyword !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const onPressEnter = (e) => {
    e.key === "Enter" && onClickSearch();
  };

  return (
    <div>
      <TopNavigation activePage={"search"} />
      <SearchWrapper>
        <div className="top-area">
          <div className="search-area">
            <img className="search-icon" src={searchIcon} />
            <input
              className="search-input"
              placeholder="글 제목, 내용"
              value={keyword}
              onChange={onChangeKeyword}
              onKeyPress={onPressEnter}
            ></input>
          </div>
          {isEmpty ? (
            <button className="cancel-btn" onClick={onClickCancel}>
              취소
            </button>
          ) : (
            <button className="search-btn" onClick={onClickSearch}>
              검색
            </button>
          )}
        </div>
        <div className="content-area">
          {isEmpty ? (
            <p className="guide arrange-center-center">
              {boardCategoryIds[match.params.category]}의 글을 검색해보세요
            </p>
          ) : (
            <ContentWrapper />
          )}
        </div>
      </SearchWrapper>
    </div>
  );
};

export default Index;
