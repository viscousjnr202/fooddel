import React, { useState } from "react";
import "./LoginPopup.css";
import { assets1 } from "../../frontend_assets/assets";
import axios from "axios";
import { useContext } from "react";
import { storeCategory } from "../Context/context";
const LoginPopup = ({ setPopup }) => {
  const [currState, setCurrState] = useState("signup");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { url, setToken } = useContext(storeCategory);

  const onchangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({ ...data, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUrl = url;
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
  

    try {
      if (currState === "signup") {
        newUrl += "/api/user/signup";
      } else {
        newUrl += "/api/user/login";
      }
      const response = await axios.post(newUrl, data);
      const {token} = response.data
      console.log(token);
      setToken(token)
      localStorage.setItem('token', token)
      setPopup(false)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="loginpopup-container">
      <form className="loginpopup-form" onSubmit={handleSubmit}>
        <div className="loginpopup-title">
          <h2>{currState === "signup" ? "Sign Up" : "Login"}</h2>
          <img
            src={assets1.cross_icon}
            alt=""
            onClick={() => setPopup(false)}
          />
        </div>
        <div className="form-inputs">
          {currState === "signup" ? (
            <input
              type="text"
              placeholder="Your Name"
              required
              value={data.name}
              name="name"
              onChange={onchangeHandler}
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="Your email"
            required
            value={data.email}
            name="email"
            onChange={onchangeHandler}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={data.password}
            name="password"
            onChange={onchangeHandler}
          />
        </div>
        <button>{currState === "signup" ? "Create account" : "Login"}</button>
        <div className="forms-terms">
          <input type="checkbox" />
          <p>I agree to the terms of use & Privacy policy</p>
        </div>
        {currState === "login" ? (
          <p className="click-here">
            Create an account?
            <span onClick={() => setCurrState("signup")}>Click here</span>
          </p>
        ) : (
          <p className="click-here">
            Already have an account?
            <span onClick={() => setCurrState("login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
