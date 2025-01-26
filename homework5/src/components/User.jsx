import React from "react";
import { useNavigate } from "react-router-dom";

const User = ({ data }) => {

    const navigate = useNavigate()

    const NavigateHandler = () => {
        navigate(`/details/${data.id}`)
    }
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.email}</p>
      <button onClick={NavigateHandler}>Details</button>
    </div>
  );
};

export default User;
