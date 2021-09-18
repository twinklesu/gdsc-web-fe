import React from "react";
import styled from "styled-components";

import MessageDetailItem from "./MessageDetailItem";


const MessageDetailWrapper = ({ message }) => {
    return (
        <div>
            { message.map((msg, index) => (
                <MessageDetailItem msg={msg}/>
            )
            )}
        </div>
    );
}

export default MessageDetailWrapper;