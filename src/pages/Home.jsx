/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Login from "../global/Login";
const pages = ["Dashboard"];
const settings = ["Profile", "Account", "Logout"];
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogin() {
    setIsLoggedIn(true);
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default Home;
