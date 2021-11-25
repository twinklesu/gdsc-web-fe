import React, { useState, useEffect } from "react";
import styled from "styled-components";

import pinImg from "../../../assets/icon/pinOn.svg";
import unPinImg from "../../../assets/icon/pinOff.svg";
import { COLORS } from "../../../components/Colors";
import { Link } from "react-router-dom";

const ItemWrapper = styled.div`
  margin-bottom: 20px;
  .category-title {
    margin-left: 10px;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid ${COLORS.grey_400};
    border-radius: 100%;
  }
  input[type="checkbox"]:checked {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: ${COLORS.grey_500};
  }
`;

const PinItem = ({ title, id, categoryId }) => {
  const [pin, setPin] = useState({
    isFree: true,
    isSecret: true,
    isGraudate: true,
    isFreshman: true,
    isIssue: true,
    isInfo: true,
  });

  const onChangeCheck = (e) => {
    console.log(`${e.target.checked}: ${e.target.name}`);
    if (e.target.checked) {
      const newObj = { ...pin, [e.target.name]: true };
      setPin(newObj);
      console.log(`newObj: ${JSON.stringify(newObj)}`);
      window.localStorage.setItem("pin", JSON.stringify(newObj));
      console.log(window.localStorage.getItem("pin"));
    } else {
      const newObj = { ...pin, [e.target.name]: false };
      setPin(newObj);
      window.localStorage.setItem("pin", JSON.stringify(newObj));
      console.log(`newObj: ${JSON.stringify(newObj)}`);
      // console.log(pin);
      console.log(`unchecked: ${e.target.name}`);
      console.log(window.localStorage.getItem("pin"));
    }
  };

  useEffect(() => {
    const storageJson = JSON.parse(window.localStorage.getItem("pin"));
    setPin({
      isFree: storageJson.isFree,
      isSecret: storageJson.isSecret,
      isGraudate: storageJson.isGraudate,
      isFreshman: storageJson.isFreshman,
      isIssue: storageJson.isIssue,
      isInfo: storageJson.isInfo,
    });
  }, []);

  return (
    <ItemWrapper>
      {/* {console.log(pin)} */}
      <input
        type="checkbox"
        name={id}
        id={id}
        checked={pin[id]}
        onChange={onChangeCheck}
      ></input>
      <Link className="category-title" to={`board/list/${categoryId + 1}`}>
        {title}
      </Link>
    </ItemWrapper>
  );
};

export default PinItem;
