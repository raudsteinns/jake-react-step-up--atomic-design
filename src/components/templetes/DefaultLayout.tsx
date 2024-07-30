import React from "react";
import Header from "../atoms/layout/Header";
import Footer from "../atoms/layout/Footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default DefaultLayout;
