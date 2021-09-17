import React from "react";
import styled from "styled-components";

import BottomNavigation from "../../layout/BottomNavigation";
import TopNavigation from "../../layout/TopNavigation";
import TopGuide from "./components/TopGuide";

const Index = () => {
    return (
        <div>
            <div className="top-navigation">
                <TopNavigation activePage={"main"}/>
            </div>
            <div className="top-guide">
                <TopGuide />
            </div>
            <div className="bottom-navigation">
                <BottomNavigation activeNum={1} />
            </div>
        </div>
    );
};

export default Index;