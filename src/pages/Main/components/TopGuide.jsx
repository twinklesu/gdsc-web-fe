import React from "react";
import styled from "styled-components";
import { COLORS } from '../../../components/Colors';

import school from "../../../assets/icon/school.svg";
import gdsc from "../../../assets/icon/gdsc.png";
import google from "../../../assets/icon/google.svg";
import notice from "../../../assets/icon/notice.svg";

const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;

    a {
        margin-left: 10px;
        margin-right:10px;
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

const TopGuide = () => {
    return(
        <LinkWrapper>
                <a href="https://gdsc-seoultech.github.io" target="_blank">
                    <div class="img-wrapper">
                        <img src={gdsc}/>  
                    </div>
                    <p>팀</p>
                    <p>블로그</p>
                </a>
                <a href="https://google.com" target="_blank">
                    <div class="img-wrapper">
                        <img src={google}/>  
                    </div>
                    <p>구글</p>
                </a>
                <a href="https://seoultech.ac.kr" target="_blank">
                    <div class="img-wrapper">
                        <img src={school}/>  
                    </div>
                    <p>학교</p>
                </a>
                <a href="https://portal.seoultech.ac.kr" target="_blank">
                    <div class="img-wrapper">
                        <img src={notice}/> 
                    </div>
                    <p>공지</p> 
                </a>
        </LinkWrapper>

    );
}

export default TopGuide;