/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  const { children } = props;

  return <div css={cardStyle}>{children}</div>;
};

const cardStyle = css`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;

export default Card;
