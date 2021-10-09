import React, { useRef, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import SliderBoard from "./components/SliderBoard";
import SliderCareer from "./components/SliderCareer";
import SliderPromotion from "./components/SliderPromotion";
import UnderLine from "./components/UnderLine";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import BottomNavigation from "../../layout/BottomNavigation";

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  .top-navigation {
    display: flex;
    height: 55px;
    background-color: white;
    button {
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  .slider-wrapper {
    width: 100%;
    height: calc(100% - 70px);
    margin-top: 70px;
    .slider-item {
      widht: 100%;
      height: 100%;
    }
  }

  .slider-item {
    width: 100%;
    height: 100%;
  }
`;

const Index = () => {
  const [sliderId, setSliderId] = useState(0);

  const mySlider = useRef();

  const settings = {
    className: "slider-wrapper",
    dots: false,
    infinite: false,
    slideToShow: 1,
    slideToScroll: 1,
    afterChange: (index) => setSliderId(index),
    ref: mySlider,
  };

  const moveSlider = (index) => {
    setSliderId(index);
    mySlider.current.slickGoTo(index);
  };

  return (
    <MainWrapper>
      <div className="top-navigation">
        {/* 슬라이더 말고, 네비게이션 통해서도 똑같이 동작하게끔 버튼으로 제작 */}
        <button onClick={() => moveSlider(0)}>
          <UnderLine text="게시판" isActive={sliderId === 0} />
        </button>
        <button onClick={() => moveSlider(1)}>
          <UnderLine text="진로" isActive={sliderId === 1} />
        </button>
        <button onClick={() => moveSlider(2)}>
          <UnderLine text="홍보" isActive={sliderId === 2} />
        </button>
      </div>
      <Slider {...settings} edgeFriction={0}>
        <div className="slider-item">
          <SliderBoard />
        </div>
        <div className="slider-item">
          <SliderCareer />
        </div>
        <div className="slider-item">
          <SliderPromotion />
        </div>
      </Slider>

      <div className="bottom-navigation">
        <BottomNavigation activeNum={2} />
      </div>
    </MainWrapper>
  );
};

export default Index;
