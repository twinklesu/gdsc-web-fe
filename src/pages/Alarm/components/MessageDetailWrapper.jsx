import React from "react";
import styled from "styled-components";

import MessageDetailItem from "./MessageDetailItem";

const MessageBox = styled.div`
    padding-top: 48px;
`;

const MessageDetailWrapper = (message) => {
    return (
        <MessageBox>
            {message.map((msg, index) => (
                <MessageDetailItem msg ={msg}/>
            )
            )}
        </MessageBox>
    );
}

export default MessageDetailWrapper;