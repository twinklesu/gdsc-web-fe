import React from "react";
import styled from "styled-components";

import TopNavigation from "../../layout/TopNavigation";
import BottomNavigation from "../../layout/BottomNavigation";
import { dummyMessage } from "../../components/dummyData";
import MessageWrapper from "./MessageWrapper";


const Index = () => {
    return (
        <div>
            <div className="top-navigation">
                <TopNavigation activePage={"messageBox"}/>
            </div>
            <div className="check-message">
                <MessageWrapper messageList={dummyMessage} />
            </div>
            <div className="bottom-navigation">
                <BottomNavigation activeNum={3} />
            </div>
        </div>
    );
};

export default Index;