import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import BottomNavigation from "../../layout/BottomNavigation";
import TopNavigation from "../../layout/TopNavigation";
import TopGuide from "./components/TopGuide";
import MyBoard from "./components/MyBoard";
import RealTimeBoard from "./components/RealTimeBoard";
import Popular from "./components/Popular";

import {
  dummyMyboard,
  dummyRealtime,
  dummyHot,
} from "../../components/dummyData";
import { COLORS } from "../../components/Colors";
import MyBoardWrapper from "./components/MyBoardWrapper";
import axios from "axios";

const ContentWrapper = styled.div`
  padding-top: 70px;
  padding-bottom: 60px;

  .setting-button {
    margin-top: 20px;
    height: 48px;
    border-radius: 10px;
    background-color: ${COLORS.grey_400};
    font-weight: 700;
    color: ${COLORS.grey_600};
    justify-content: center;
    text-align: center;
    width: 100%;
  }
`;

const Index = () => {
  const history = useHistory();

  const onClickBtn = () => {
    history.push("/setting");
  };

  const [setting, setSetting] = useState({
    isMine: true,
    isRealtime: true,
    isHot: true,
  });

  const [myboardList, setMyboardList] = useState([]);
  const [realtimeList, setRealtimeList] = useState([]);
  const [hotList, setHotList] = useState([]);

  useEffect(() => {
    const defaultSetting = { isMine: true, isRealtime: true, isHot: true };
    const storage = window.localStorage.getItem("setting");

    if (!storage) {
      window.localStorage.setItem("setting", JSON.stringify(defaultSetting));
    } else {
      const storageJson = JSON.parse(storage);
      setSetting({
        isMine: storageJson.isMine,
        isHot: storageJson.isHot,
        isRealtime: storageJson.isRealtime,
      });
    }

    // 데이터 받아오기
    const fetchData = async () => {
      const myboardResult = await axios("/api/board/main/myboard");
      setMyboardList(myboardResult.data.data);
      const realtimeResult = await axios(`/api/board/main/realtime`);
      setRealtimeList(realtimeResult.data.data);
      const hotResult = await axios(`/api/board/main/hot`);
      setHotList(hotResult.data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="top-navigation">
        <TopNavigation activePage={"main"} />
      </div>
      <ContentWrapper>
        <div className="top-guide">
          <TopGuide />
        </div>

        {setting.isMine && (
          <div className="my-board">
            <MyBoard myBoard={myboardList} />
          </div>
        )}
        {setting.isRealtime && (
          <div className="real-time-board">
            <RealTimeBoard contents={realtimeList} />
          </div>
        )}
        {setting.isHot && (
          <div className="popular-board">
            <Popular contents={hotList} />
          </div>
        )}

        <button className="setting-button" onClick={onClickBtn}>
          홈 화면 설정
        </button>
      </ContentWrapper>
      <div className="bottom-navigation">
        <BottomNavigation activeNum={1} />
      </div>
    </div>
  );
};

export default Index;
