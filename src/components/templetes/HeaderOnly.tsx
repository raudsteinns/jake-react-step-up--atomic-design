/** @jsxImportSource @emotion/react */
import React from "react";
import Header from "../atoms/layout/Header";

interface HeaderOnlyProps {
  children: React.ReactNode;
}

const HeaderOnly: React.FC<HeaderOnlyProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};

export default HeaderOnly;
