import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import BoardBox from "../../../layout/BoardBox.jsx";

import { dummyRealtime } from "../../../components/dummyData.js";

const BoardWrapper = styled.div`
  display: block;
`;

const SliderPromotion = () => {
  const [hotList, setHotList] = useState([]);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `/api/board/main/filter?category=${9}&hot=${0}`
      );
      setPostList(result.data.data);

      const hotResult = await axios(
        `/api/board/main/filter?category=${9}&hot=${1}`
      );
      setHotList(hotResult.data.data);
    };
    fetchData();
  }, []);

  return (
    <BoardWrapper>
      <BoardBox title="인기 게시물" contents={hotList} to="/board/list/9" />
      <BoardBox title="홍보게시판" contents={postList} to="/board/list/9" />
    </BoardWrapper>
  );
};

export default SliderPromotion;
