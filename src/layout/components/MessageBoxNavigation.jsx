import React from "react";
import styled from "styled-components";
import { COLORS } from '../../components/Colors';

const MsgBoxNavigation = styled.div`
    display: flex;
    padding-top: 10px;

    p {
        font-size: 25px;
    }
    .alert {
        color: ${COLORS.grey_light};

    }

    .msgBox {
        margin-left: 15px;
        border-bottom: 2px solid;
        padding-bottom: 20px;
        height: 14px;
    }

`;

const MessageBoxNavigation = () => {
    return (
        <MsgBoxNavigation>
            <p className="alert">알림</p>
            <p className="msgBox">쪽지함</p>
        </MsgBoxNavigation>
    );
};

export default MessageBoxNavigation;