import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";

import school from "../../../assets/icon/school.svg";
import gdsc from "../../../assets/icon/gdsc.png";
import google from "../../../assets/icon/google.svg";
import notice from "../../../assets/icon/notice.svg";

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;

  a {
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
  }

  p {
    font-size: 12px;
    margin-top: 3px;
  }

  .img-wrapper {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    background-color: ${COLORS.grey_300};
    img {
      height: 20px;
    }
  }
`;

const linkItems = [
  {
    text: "팀블로그",
    to: "https://gdsc-seoultech.github.io",
  },
  {
    text: "구글",
    to: "https://google.com",
  },
  {
    text: "학교",
    to: "https://seoultech.ac.kr",
  },
  {
    text: "포털",
    to: "https://portal.seoultech.ac.kr",
  },
];

const LinkItem = ({ text, to }) => {
  const mapImg = () => {
    switch (text) {
      case "팀블로그":
        return gdsc;
      case "구글":
        return google;
      case "학교":
        return school;
      case "포털":
        return notice;
      default:
        return google;
    }
  };

  return (
    <a href={to} target="_blank">
      <div class="img-wrapper">
        <img src={mapImg()} />
      </div>
      <p>{text}</p>
    </a>
  );
};

const TopGuide = () => {
  return (
    <LinkWrapper>
      {linkItems.map((item) => (
        <LinkItem text={item.text} to={item.to} />
      ))}
    </LinkWrapper>
  );
};

export default TopGuide;
