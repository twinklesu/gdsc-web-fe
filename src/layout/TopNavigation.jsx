import React from "react";
import styled from "styled-components";
import { COLORS } from '../components/Colors';

import MessageBoxNavigation from "./components/MessageBoxNavigation";
import MainNavigation from "./components/MainNavigation";

const NavigationWrapper = styled.div`
    display: flex;
    height: 55px;
    background-color: white;
`;

// 페이지 마다 보여지는게 달라져.. 

const mapPageToNavi = {
    messageBox: <MessageBoxNavigation />,
    main: <MainNavigation />,
};

const TopNavigation = ({ activePage }) => {
    return (
        <NavigationWrapper>
        { mapPageToNavi[activePage] }
        </NavigationWrapper>
    );
};

export default TopNavigation;