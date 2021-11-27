import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import MessageDetailItem from "./MessageDetailItem";

import arrowImg from "../../../assets/vector/arrow.svg";
import sendImg from "../../../assets/icon/send.png";

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

const MessageNavigation = ({ id }) => {
  return (
    <NavWrapper>
      <Link className="back" to="/alarm">
        <img src={arrowImg} alt="뒤로가기" />
      </Link>
      <p>익명</p>
      <Link className="send" to={`/message/post/${1}/${id}`}>
        <img src={sendImg} alt="메세지 보내기" />
      </Link>
    </NavWrapper>
  );
};

const MessageDetailWrapper = ({ match }) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/api/message/detail/${match.params.no}`);
      setMessageList(result.data.data);
      console.log(result.data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <MessageNavigation id={match.params.no} />
      {messageList.map((msg, index) => (
        <MessageDetailItem msg={msg} />
      ))}
    </div>
  );
};

export default MessageDetailWrapper;
