import React from "react";
import styled from "styled-components";

import BottomNavigation from "../../layout/BottomNavigation";
import TopNavigation from "../../layout/TopNavigation";
import TopGuide from "./components/TopGuide";
import MyBoard from "./components/MyBoard";
import RealTimeBoard from "./components/RealTimeBoard";
import Popular from "./components/Popular";

import { dummyMyboard, dummyRealtime, dummyHot } from "../../components/dummyData";

const ContentWrapper = styled.div`
    padding-top: 70px;
    padding-bottom: 60px;
`;

const Index = () => {
    return (
        <div>
            <div className="top-navigation">
                <TopNavigation activePage={"main"}/>
            </div>
            <ContentWrapper>
                <div className="top-guide">
                    <TopGuide />
                </div>
                <div className="my-board">
                    <MyBoard myBoard={dummyMyboard}/>
                </div>
                <div className="real-time-board">
                    <RealTimeBoard contents={dummyRealtime}/>
                </div>
                <div className="popular-board">
                    <Popular contents={dummyHot}/>
                </div>
            </ContentWrapper>
            <div className="bottom-navigation">
                <BottomNavigation activeNum={1} />
            </div>
        </div>
    );
};

export default Index;