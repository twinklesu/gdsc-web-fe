import React from "react";
import styled from "styled-components";
import { COLORS } from '../../components/Colors';
import { Link } from "react-router-dom";

import searchImg from "../../assets/nav/search.svg";
import mypageImg from "../../assets/nav/mypage.svg";

const MsgBoxNavigation = styled.div`
    display: block;
    padding-top: 10px;

    .app-name {
        font-size: 10px;
        color: ${COLORS.red};
        margin-bottom: 5px;
    }

    .main-nav {
        display: flex;

        .school-name {
            font-weight: bold;
            font-size: 25px;
        }
        .icon-wrapper {
            margin-left: 310px;
            img {
                margin-left: 20px;
                width: 24px;
                height: 24px;
            }
        }

    }
`;

const MainNavigation = () => {
    return (
        <MsgBoxNavigation>
            <p className="app-name">에브리타임</p>
            <div className="main-nav">
                <p className="school-name">GDSC 웹</p>
                <div className="icon-wrapper">
                    <Link className="search" to="/search">
                        <img src={searchImg}/>
                    </Link>
                    <Link className="myPage" to="/myPage">
                        <img src={mypageImg}/>
                    </Link>
                </div>
            </div>



        </MsgBoxNavigation>
    );
};

export default MainNavigation;