import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MainPage from "./MainPage";

const LoginPage = () => {
  const [users, setUsers] = useState([]);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  // Get all users
  const getAllUsers = async () => {
    const { data } = await axios.get("http://localhost:3000/users");
    setUsers(data);
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Login = () => {
    const user = users.find((item) => item.username.toLowerCase() === loginData.username.toLowerCase());

    if (!user) {
      alert("No user found");
    } else if (loginData.password !== user.password) {
      alert("Password is incorrect!");
    } else {
      alert("Login successful");
      sessionStorage.userFullName = user.fullName;
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return <MainPage />;
  }

  return (
    <div className="middleDiv">
      <h1>Movies - Subscriptions Web Site</h1>
      <br />
      <h3>Login Page</h3>
      <br />
      <br />
      <form onSubmit={(e) => e.preventDefault()} className="loginForm">
        <label>
          Username:
          <input type="text" onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} placeholder="Enter username" required />
        </label>
        <label>
          Password:
          <input type="password" onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} placeholder="Enter password" required />
        </label>
        <button onClick={Login}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
