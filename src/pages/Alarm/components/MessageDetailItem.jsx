import React from "react";
import styled from "styled-components";
import { COLORS } from '../../../components/Colors';

const MessageWrapper = styled.div`
    display: block;
    height: 100%
    margin-top: 25px;
    
    .message-category {
        float: left;
        color: ${COLORS.yellow};
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
        width: 480px;
        color: ${COLORS.black};
    }
`;

const MessageDetailItem = ({ msg }) => {
    const category = msg.isFrom?"받은 쪽지":"보낸 쪽지";
    return(
        <MessageWrapper>
                <p className="message-category">{ category }</p>
                <p className="message-date">{ msg.date }</p>
                <p className="message-title">{ msg.contents }</p>
        </MessageWrapper>
    );
}

export default MessageDetailItem;