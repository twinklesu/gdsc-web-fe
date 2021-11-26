import React, { useEffect, useState } from "react";
import styled from "styled-components";

import TopNavigation from "../../layout/TopNavigation";
import BottomNavigation from "../../layout/BottomNavigation";
import { dummyMessage } from "../../components/dummyData";
import MessageWrapper from "./components/MessageWrapper";
import axios from "axios";

const ContentWrapper = styled.div`
  padding-top: 70px;
  padding-bottom: 60px;
`;

const Index = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`api/message/`);
      setMessageList(result.data.data);
      console.log(result.data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="top-navigation">
        <TopNavigation activePage={"messageBox"} />
      </div>
      <ContentWrapper>
        <div className="check-message">
          <MessageWrapper messageList={messageList} />
        </div>
      </ContentWrapper>

      <div className="bottom-navigation">
        <BottomNavigation activeNum={3} />
      </div>
    </div>
  );
};

export default Index;
