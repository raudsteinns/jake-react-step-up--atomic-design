/** @jsxImportSource @emotion/react */
import React, { memo } from "react";
import PrimaryButton from "../atoms/button/PrimaryButton";
import Input from "../atoms/input/Input";
import { css } from "@emotion/react";

const SearchInput: React.FC = memo(() => {
  return (
    <div css={searchComponentWrapper}>
      <Input placeholder="検索条件を入力" />
      <PrimaryButton>検索</PrimaryButton>
    </div>
  );
});

const searchComponentWrapper = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

export default SearchInput;
