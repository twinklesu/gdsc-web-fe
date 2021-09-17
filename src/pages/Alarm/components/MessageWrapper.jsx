import React from "react";
import styled from "styled-components";
import MessageList from "./MessageList";

const MessageBox = styled.div`
    padding-top: 48px;
`;

const MessageWrapper = ({ messageList }) => {
    return (
        <MessageBox>
            {messageList.map((msg, index) => (
                <MessageList msg={msg}/>
            )
            )}
        </MessageBox>
    );
}

export default MessageWrapper;