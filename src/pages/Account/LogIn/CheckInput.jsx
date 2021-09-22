import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import MainInput from "../../../components/Input/MainInput";

const CheckInput = ({ placeholder }) => {
  const [input, setInput] = useState("");

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleFocus = () => {
    if (!onChangeInput) {
    }
  };

  return (
    <div>
      <MainInput
        type="text"
        value={input}
        onChange={onChangeInput}
        onFocus={handleFocus}
        onBlur={handleFocus}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CheckInput;
