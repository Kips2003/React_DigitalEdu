import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/LogIn.css';

const User = () => {
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [user, setUserCredentials] = useState({
    userName: "",
    password: "",
  });

  let isFieldsEmpty =
    user.userName === "" || user.password === "" ? true : false;

  const CheckLogIn = () => {
    if (
      user.userName === "digitalAcademy@gmail.com" &&
      user.password === "iLoveReact123"
    ) {
        setIsLoggingIn(true);
    setTimeout(() => {
      navigate('/mainPage');
    }, 500);
      
    } else {
      document.getElementById("errorMessage").innerText =
        "Your Username or Password is incorrect";
    }
  };
  return (
    <div className={`container ${isLoggingIn ? 'slide-up' : ''}`}>
        <div className="innerBox">
            <p id="errorMessage" className="errorMessage"></p>
            <form>
            <label htmlFor="userName">UserName:</label>
            <input
                type="text"
                name="userName"
                id="userName"
                onChange={(e) =>
                setUserCredentials((prev) => ({
                    ...prev,
                    userName: e.target.value,
                }))
                }
            />
            <br />
            <label htmlFor="password">Password: </label>
            <input
                type="password"
                name="password"
                id="password"
                onChange={(e) =>
                setUserCredentials((prev) => ({
                    ...prev,
                    password: e.target.value,
                }))
                }
            />{" "}
            <br />
            <button
                className={isFieldsEmpty ? "disabled" : "notDisabled"}
                disabled={isFieldsEmpty}
                onClick={(e) => {
                e.preventDefault();
                CheckLogIn();
                }}
            >
                Log In
            </button>
            </form>
        </div>
    </div>
  );
};

export default User;
