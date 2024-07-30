/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

const Header: React.FC = () => {
  return (
    <header css={headerStyle}>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
    </header>
  );
};

const headerStyle = css`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: center;
  background-color: #11999e;
  text-align: center;
  padding: 8px 0;
  a {
    color: #fff;
  }
`;

export default Header;
