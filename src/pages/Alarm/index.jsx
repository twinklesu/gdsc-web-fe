import React from "react";
import styled from "styled-components";

import TopNavigation from "../../layout/TopNavigation";
import BottomNavigation from "../../layout/BottomNavigation";
import { dummyMessage } from "../../components/dummyData";
import MessageWrapper from "./components/MessageWrapper";

const ContentWrapper = styled.div`
    margin-top: 70px;
    margin-bottom: 50px;
`;

const Index = () => {
    return (
        <div>
            <div className="top-navigation">
                <TopNavigation activePage={"messageBox"}/>
            </div>
            <ContentWrapper>
                <div className="check-message">
                    <MessageWrapper messageList={dummyMessage} />
                </div>
            </ContentWrapper>

            <div className="bottom-navigation">
                <BottomNavigation activeNum={3} />
            </div>
        </div>
    );
};

export default Index;