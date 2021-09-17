import React from "react";
import styled from "styled-components";

import school from "../../../assets/icon/school.svg";
import gdsc from "../../../assets/icon/gdsc.png";
import google from "../../../assets/icon/google.svg";
import notice from "../../../assets/icon/notice.svg";

const TopGuide = () => {
    return(
        <LinkWrapper>
            <img src={gdsc}/>
            <img src={school}/>
            <img src={google}/>
            <img src={notice}/>
        </LinkWrapper>

    );
}

export default TopGuide;