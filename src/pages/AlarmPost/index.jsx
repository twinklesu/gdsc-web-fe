import React, { useState } from "react";
import styled from "styled-components";

import xVector from "../../assets/vector/xVector.svg";
import { COLORS } from "../../components/Colors";
import cameraImg from "../../assets/icon/camera.svg";
import axios from "axios";
import { useHistory } from "react-router";

const MainWrapper = styled.div`
  .post-title {
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: bold;
  }
  .post-content {
    margin-top: 20px;
    height: 300px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
  }
  .bottom-nav {
    display: flex;
    position: fixed;
    bottom: 10px;
    width: 480px;
    justify-content: space-between;
    align-items: center;
    img {
      width: 25px;
    }
    input[type="file"] {
      background: url(${cameraImg});
      background-repeat: ;
    }
    .is-secret-wrapper {
      input[type="checkbox"] {
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 1px solid ${COLORS.grey_400};
        border-radius: 2px;
        align-self: center;
      }
      input[type="checkbox"]:checked {
        width: 12px;
        height: 12px;
        background-color: ${COLORS.red};
        border: 1px solid ${COLORS.red};
        border-raidus: 2px;
        align-self: center;
      }
      .is-secret-label {
        color: ${(props) => (props.isSecret ? COLORS.red : COLORS.grey_400)};
        margin-left: 5px;
      }
    }
  }
`;

const NavigationWrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding-top: 10px;

  .title-wrapper {
    display: flex;
    img {
      width: 20px;
    }
    h1 {
      margin-left: 10px;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .write-btn {
    color: #ffffff;
    background-color: ${COLORS.red};
    padding: 5px 10px 5px 10px;
    border-radius: 15px;
  }
`;

const Index = ({ match }) => {
  let history = useHistory();
  const [content, setContent] = useState("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const writeFunction = async () => {
    const writeResult = await axios({
      method: "POST",
      url: "/api/message",
      data: {
        id: match.params.id,
        content: content,
        group: match.params.group,
      },
    });
    if (writeResult.data.success) {
      // 성공
      history.push(`/alarm/${writeResult.data.data.message_id}`);
    } else {
      // 처리해야돼,,,,
      alert(`${writeResult.data.message}`);
    }
  };

  const TopNavigation = () => {
    const onClickWriteBtn = () => {
      if (content !== "") {
        writeFunction();
      } else {
        alert("내용을 입력해주세요.");
      }
    };

    const onClickCancel = () => {
      history.goBack();
    };

    return (
      <NavigationWrapper>
        <div className="title-wrapper">
          <button onClick={onClickCancel}>
            <img src={xVector} alt="닫기" />
          </button>
          <h1>쪽지 보내기</h1>
        </div>
        <button className="write-btn" onClick={onClickWriteBtn}>
          완료
        </button>
      </NavigationWrapper>
    );
  };

  return (
    <MainWrapper isSecret={true}>
      <TopNavigation />
      <textarea
        className="post-content"
        placeholder="내용을 입력하세요."
        onChange={onChangeContent}
      ></textarea>
    </MainWrapper>
  );
};

export default Index;
