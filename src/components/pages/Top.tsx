/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const Top: React.FC = () => {
  return (
    <div css={containerStyle}>
      <h2>Topページです</h2>
    </div>
  );
};

const containerStyle = css`
  text-align: center;
`;

export default Top;
