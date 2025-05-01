import React from "react";
import { useEffect, useState } from "react";
import { fetchUsers } from "../api/FetchUsers";
import "../css/home.css";
import User from "../components/User";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const [users, setusers] = useState([]);
  const [error, seterror] = useState("");
  const [limit, setlimit] = useState(5);
  const [isDisabled, setisDisabled] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    fetchUsers()
      .then((data) => {
        setusers(data);
      })
      .catch((error) => {
        seterror(error.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div>
        <h1>error: {error}</h1>
      </div>
    );
  }

  const checkLimit = () => {
    if (limit + 5 >= users.length) {
      setisDisabled(true);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <div className="userContainer">
        {isLoading ? (
          <ClipLoader size={50} />

        ) : error ? (
          <h1>{error}</h1>
        ) : (
          users.slice(0, limit).map((user) => (
            <div className="user" key={user.id}>
              <User data={user} />
            </div>
          ))
        )}
      </div>
      <button
        disabled={isDisabled}
        onClick={() => {
          setlimit(limit + 5);
          checkLimit();
        }}
      >
        Add 5 User
      </button>
    </div>
  );
};

export default Home;
