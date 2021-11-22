import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [isSecret, setIsSecret] = useState(true);

  const onSelectImage = (e) => {
    setImage(e.target.files[0]);
  };
  const onChangeCheck = (e) => {
    if (e.target.checked) {
      setIsSecret(true);
      console.log(isSecret);
    } else {
      setIsSecret(false);
      console.log(isSecret);
    }
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const writeFunction = async () => {
    const writeResult = await axios({
      method: "POST",
      url: "/api/board",
      data: {
        category_id: match.params.category,
        title: title,
        content: content,
        is_secret: isSecret,
      },
    });
    if (writeResult.data.success) {
      // 성공
      history.push(`/board/detail/${writeResult.data.data.id}`);
    }
  };

  const TopNavigation = () => {
    const onClickWriteBtn = () => {
      if (title !== "" && content !== "") {
        writeFunction();
      } else {
        alert("제목과 내용을 입력해주세요.");
      }
    };
    return (
      <NavigationWrapper>
        <div className="title-wrapper">
          <Link to={`board/list/${match.params.category}`}>
            <img src={xVector} alt="닫기" />
          </Link>
          <h1>글 쓰기</h1>
        </div>
        <button className="write-btn" onClick={onClickWriteBtn}>
          완료
        </button>
      </NavigationWrapper>
    );
  };

  return (
    <MainWrapper isSecret={isSecret}>
      <TopNavigation />
      <textarea
        className="post-title"
        placeholder="제목을 입력하세요."
        onChange={onChangeTitle}
      ></textarea>
      <textarea
        className="post-content"
        placeholder="내용을 입력하세요."
        onChange={onChangeContent}
      ></textarea>
      <div className="bottom-nav">
        <div>
          <input
            type="file"
            accept="image/*"
            name="image"
            id="imageInput"
            onChange={onSelectImage}
            style={{ display: "none" }}
          />
          <label htmlFor="imageInput">
            <img src={cameraImg} alt="사진" />
          </label>
        </div>
        <div className="is-secret-wrapper">
          <input
            type="checkbox"
            name="isSecret"
            id="isSecret"
            checked={isSecret}
            onChange={onChangeCheck}
          />
          <label className="is-secret-label" htmlFor="isSecret">
            익명
          </label>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Index;
