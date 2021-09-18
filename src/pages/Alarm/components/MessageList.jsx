import React from "react";
import styled from "styled-components";
import { COLORS } from '../../../components/Colors';
import { Link } from "react-router-dom";


const MessageItem = styled.div`
    display: block;
    height: 40px;
    margin-top: 25px;

    .message-top {
        display: flex;
        justify-content: space-between;
    }

    .message-title {
        padding-top: 5px;
        height: 20px;
        width: 480px;
        color: ${COLORS.black};
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`;

const MessageList = ({ msg }) => {

    return (
        <MessageItem>
            <Link className="message-item" to={`alarm/${msg.id}` }>
                <div className="message-top">
                    <p className="nickname">{ msg.nick }</p>
                    <p className="date">{ msg.date }</p>
                </div>
                <p className="message-title">{ msg.title }</p>
            </Link>
        </MessageItem>
    );
}

export default MessageList;