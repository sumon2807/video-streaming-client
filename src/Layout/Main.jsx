import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <>
      <NavBar />
        <Outlet />
      <Footer />
    </>
  );
};

export default Main;
