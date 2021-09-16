import React from "react";
import styled from "styled-components";
import { COLORS } from '../components/Colors';
import { Link } from "react-router-dom";

import MessageBoxNavigation from "./components/MessageBoxNavigation";

const NavigationWrapper = styled.div`
    display: flex;
    height: 48px;
    border-top: 1px solid ${COLORS.grey_light};
    background-color: white;
`;

// 페이지 마다 보여지는게 달라져.. 

const mapPageToNavi = {
    messageBox: <MessageBoxNavigation />
};

const TopNavigation = ({ activePage }) => {
    return (
        <NavigationWrapper>
        { mapPageToNavi[activePage] }
        </NavigationWrapper>
    );
};

export default TopNavigation;