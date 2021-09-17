import React from "react";
import styled from "styled-components";
import { COLORS } from '../../../components/Colors';
import { Link } from "react-router-dom";


const MessageItem = styled.div`
    display: block;
    height: 40px;
    margin-top: 25px;
    
    .message-nick {
        float: left;
        color: ${COLORS.black};
        font-weight: bold;
    }

    // 근데 date는 여기저기 똑같으니까 공통 css 쓰면 좋을듯,,
    .message-date {
        float: right;
        color: ${COLORS.grey_light};
        font-size: 14px;
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
                <p className="message-nick">{ msg.nick }</p>
                <p className="message-date">{ msg.date }</p>
                <p className="message-title">{ msg.title }</p>
            </Link>
        </MessageItem>
    );
}

export default MessageList;