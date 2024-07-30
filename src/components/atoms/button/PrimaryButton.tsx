/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import BaseButtonStyle from "./_BaseButton";

interface PrimaryButtonProps {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  const { children } = props;

  return <button css={buttonStyle}>{children}</button>;
};

const buttonStyle = css`
  ${BaseButtonStyle};
  background-color: #40514e;
  color: #fff;
`;

export default PrimaryButton;
