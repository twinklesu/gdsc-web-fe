import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import arrowImg from "../../assets/vector/arrow.svg";
import sendImg from "../../assets/icon/send.png";

const NavWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  margin-top: 5px;
  justify-content: space-between;
  width: 100%;
  padding-right: 15px;

      .back {
        width: 24px;
        height: 24px;
        transform: rotate(180deg);
      }
      p {
          font-size: 20px;
          margin-left: 20px;
      }

      .send {
          img{
            width: 24px;
            height: 24px;
          }
      }

  }
`;

const MessageNavigation = () => {
  return (
    <NavWrapper>
      <Link className="back" to="/alarm">
        <img src={arrowImg} alt="뒤로가기" />
      </Link>
      <p>익명</p>
      <Link className="send" to="/message/post">
        <img src={sendImg} alt="메세지 보내기" />
      </Link>
    </NavWrapper>
  );
};

export default MessageNavigation;
