import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "../../components/Colors";

import checkImg from "../../assets/vector/checked.svg";
import TopNavigation from "../../layout/TopNavigation";

const SettingWrapper = styled.div`
  input[type="checkbox"] {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    border: 1px solid ${COLORS.grey_400};
  }

  input[type="checkbox"]:checked {
    width: 12px;
    height: 12px;
    border: none;
    border-radius: 100%;
    background: url("${checkImg}");
  }

  .input-container {
    border-radius: 5px;
    border: 1px solid ${COLORS.grey_400};
    padding-top: 20px;
    padding-left: 10px;
  }

  .select-wrapper {
    margin-bottom: 20px;
    label {
      margin-left: 15px;
    }
  }
`;

const Index = () => {
  const [setting, setSetting] = useState({
    isMine: false,
    isHot: false,
    isRealtime: false,
  });

  const onChangeCheck = (e) => {
    if (e.target.checked) {
      const newObj = { ...setting, [e.target.name]: true }; // setting의 e.target.name에 배치하는..
      window.localStorage.setItem("setting", JSON.stringify(newObj));
      setSetting(newObj);
    } else {
      const newObj = { ...setting, [e.target.name]: false };
      window.localStorage.setItem("setting", JSON.stringify(newObj));
      setSetting(newObj);
    }
  };

  useEffect(() => {
    const storageJson = JSON.parse(window.localStorage.getItem("setting"));
    setSetting({
      isMine: storageJson.isMine,
      isRealtime: storageJson.isRealtime,
      isHot: storageJson.isHot,
    });
  }, []);

  return (
    <SettingWrapper>
      <div>
        <TopNavigation activePage="setting" />
      </div>
      <div className="input-container">
        <div className="select-wrapper">
          <input
            type="checkbox"
            name="isMine"
            id="isMine"
            checked={setting.isMine}
            onChange={onChangeCheck}
          />
          <label htmlFor="isMine">즐겨찾는 게시판</label>
        </div>
        <div className="select-wrapper">
          <input
            type="checkbox"
            name="isHot"
            id="isHot"
            checked={setting.isHot}
            onChange={onChangeCheck}
          />
          <label htmlFor="isHot">HOT 게시판</label>
        </div>
        <div className="select-wrapper">
          <input
            type="checkbox"
            name="isRealtime"
            id="isRealtime"
            checked={setting.isRealtime}
            onChange={onChangeCheck}
          />
          <label htmlFor="isRealtime">실시간 인기글</label>
        </div>
      </div>
    </SettingWrapper>
  );
};

export default Index;
