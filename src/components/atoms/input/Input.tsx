/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

interface InputProps {
  placeholder: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { placeholder = "" } = props;

  return <input type="text" placeholder={placeholder} css={inputStyle} />;
};

const inputStyle = css`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 4px;
  outline: none;
`;

export default Input;
