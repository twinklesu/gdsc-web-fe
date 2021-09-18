import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import noProfileImg from "../../../assets/img/temp.png";
import likeIcon from "../../../assets/icon/like.png";
import commentIcon from "../../../assets/icon/comment.png";
import { COLORS } from "../../../components/Colors";

const ContentWrapper = styled.div`
    display: block;
    margin-bottom: 20px;

    .popular-top {
        diplay: flex;
        width: 100%
        justify-content: space-between;
        margin-bottom: 8px;

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
    h1 {
        font-weight: bold;
        margin-bottom: 5px;
    }

    .popular-content {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        height: 20px;
        margin-bottom: 5px;
    }

    .popular-bottom {
        display: flex;
        justify-content: space-between;

        .popular-category {
            color: ${COLORS.grey_400};
            font-size: 14px;
        }
        img {
            width: 15px;
            margin-left: 5px
        }
        .popular-num {
            display: flex;
            .like-num {
                margin-left: 5px;
                color: ${COLORS.red};
                font-size: 14px;
            }
            .comments-num {
                margin-left: 5px;
                color: ${COLORS.green};
                font-size: 14px;
            }
        }
    }

`;

// profileUrl: "",
// nick: "익명",
// date: "09/05 00:39",
// title: "React 스터디 잘하는방법",
// contents: "hellow word",
// category: "자유게시판",
// comments: 35,
// like: 20,

const RealTimeItem = ({content}) => {
    const profileImg = content.profileUrl?"":noProfileImg;
    return(
        <ContentWrapper>
            <Link>
                <div className="popular-top">
                    <div className="profile">
                        <img src={profileImg} alt="프로필 이미지"/>
                        <p className="nickname">{content.nick}</p>
                    </div>
                    <p className="date">{content.date}</p>
                </div>
                <h1>{content.title}</h1>
                <p className="popular-content">{content.contents}</p>
                <div className="popular-bottom">
                    <p className="popular-category">{content.category}</p>
                    <div className="popular-num">
                        <img src={likeIcon}/>
                        <p className="like-num">{content.like}</p>
                        <img src={commentIcon}/>
                        <p className="comments-num">{content.comments}</p>
                    </div>
                </div>
            </Link>
        </ContentWrapper>
    );
};

export default RealTimeItem;