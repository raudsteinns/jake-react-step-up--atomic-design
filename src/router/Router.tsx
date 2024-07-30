import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "../components/pages/Top";
import Users from "../components/pages/Users";
import DefaultLayout from "../components/templetes/DefaultLayout";
import HeaderOnly from "../components/templetes/HeaderOnly";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Top />
            </DefaultLayout>
          }
        />
        <Route
          path="/users"
          element={
            <HeaderOnly>
              <Users />
            </HeaderOnly>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
