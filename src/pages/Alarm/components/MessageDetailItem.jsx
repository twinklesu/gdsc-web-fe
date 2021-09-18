import React from "react";
import styled from "styled-components";
import { COLORS } from '../../../components/Colors';

const MessageWrapper = styled.div`
    display: block;
    height: 100%
    margin-top: 25px;

    .message-top {
        justify-content: space-between;
        .message-category {
            float: left;
            color: ${COLORS.yellow};
            font-weight: bold;
        }
    }
    

    .message-title {
        padding-top: 5px;
        width: 480px;
        color: ${COLORS.black};
    }
`;

const MessageDetailItem = ({ msg }) => {
    const category = msg.isFrom?"받은 쪽지":"보낸 쪽지";
    return(
        <MessageWrapper>
            <div className="message-top">
                <p className="message-category">{ category }</p>
                <p className="date">{ msg.date }</p>
            </div>
                <p className="message-title">{ msg.contents }</p>
        </MessageWrapper>
    );
}

export default MessageDetailItem;