/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import BaseButtonStyle from "./_BaseButton";

interface SecondaryButtonProps {
  children: React.ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = (props) => {
  const { children } = props;

  return <button css={buttonStyle}>{children}</button>;
};

const buttonStyle = css`
  ${BaseButtonStyle};
  background-color: #11999e;
  color: #fff;
`;

export default SecondaryButton;
