/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const Footer: React.FC = () => {
  return <footer css={footerStyle}>&copy; 2024 Test Inc.</footer>;
};

const footerStyle = css`
  position: fixed;
  bottom: 0;
  color: #fff;
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: center;
  background-color: #11999e;
  text-align: center;
  padding: 8px 0;
`;

export default Footer;
