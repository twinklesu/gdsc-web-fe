import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";

const MessageWrapper = styled.div`
    display: block;
    height: 100%
    margin-top: 25px;

    .message-top {
        justify-content: space-between;
        display: flex;
        margin-top: 20px;
        margin-bottom: 2px;
        padding-right: 25px;
        .message-get {
            float: left;
            color: ${COLORS.green};
        }
        
        .message-send {
            float: left;
            color: ${COLORS.yellow};
        }

        .message-date {
            float: right;
            display: inline-block;
        }
    }
    

    .message-title {
        padding-top: 5px;
        padding-bottom: 10px;
        width: 480px;
        color: ${COLORS.black};
        border-bottom: solid 1px ${COLORS.grey_500};

    }


`;

const MessageDetailItem = ({ msg }) => {
  return (
    <MessageWrapper>
      <div className="message-top">
        {msg.is_mine ? (
          <p className="message-send">보낸 쪽지</p>
        ) : (
          <p className="message-get">받은 쪽지</p>
        )}
        <p className="date message-date">{msg.created_at}</p>
      </div>
      <p className="message-title">{msg.content}</p>
    </MessageWrapper>
  );
};

export default MessageDetailItem;
