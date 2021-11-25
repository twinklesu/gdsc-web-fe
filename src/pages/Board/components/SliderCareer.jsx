import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BoardBox from "../../../layout/BoardBox.jsx";
import axios from "axios";

const BoardWrapper = styled.div`
  display: block;
`;

const SliderCareer = () => {
  const [hotList, setHotList] = useState([]);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `/api/board/main/filter?category=${8}&hot=${0}`
      );
      setPostList(result.data.data);

      const hotResult = await axios(
        `/api/board/main/filter?category=${8}&hot=${1}`
      );
      setHotList(hotResult.data.data);
    };
    fetchData();
  }, []);

  return (
    <BoardWrapper>
      {/* 나중에 백엔드 연결하면 그냥 contents만 연결 */}
      <BoardBox title="인기 게시물" contents={hotList} to="/board/list/8" />
      <BoardBox title="공기업게시판" contents={postList} to="/board/list/8" />
    </BoardWrapper>
  );
};

export default SliderCareer;
