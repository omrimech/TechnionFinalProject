import React, { useState, useEffect } from "react";
import PageTransfer from "./PageTransfer";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [isLogout, setIslogout] = useState(false);
  const [page, setPage] = useState("main");
  const navigate = useNavigate()
  const logout = () => {
    setIslogout(true);
  };

  useEffect(() => {
    if (isLogout) {
      setPage("login");
    }
  }, [isLogout]);

  if (page === "login") {
    return <LoginPage />;
  }

  return (
    <div className="middleDiv">
      <h1>Movies - Subscriptions Web Site</h1>
      <button onClick={() => navigate("/")}>Movies</button> <button onClick={() => navigate("/MembersPage")}>Subscriptions</button> <button onClick={logout}>Logout</button>
      <br />
      <br />
      <br />
      <PageTransfer />
    </div>
  );
};

export default MainPage;
