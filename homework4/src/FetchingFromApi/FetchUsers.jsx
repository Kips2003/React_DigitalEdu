import React from "react";
import { useEffect, useState } from "react";
import "../css/user.css";

const FetchUsers = () => {
  const [limit, setLimit] = useState(5);
  const [error, seterror] = useState("");
  const [users, setUsers] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const IncreaseLimit = () => {
    const newLimit = limit + 5;
    setLimit(newLimit);
    if (newLimit >= users.length) {
      setIsDisabled(true);
    }
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => {
        setUsers(data);
        if (limit >= data.length) {
          setIsDisabled(true);
        }
      })
      .catch((error) => {
        seterror(error.message);
      });
  }, []);

  return (
    <div>
      <div className="userCard">
        {users.slice(0, limit).map((user) => (
          <div key={user.id} className="user">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))}

        {error && <h1>{error}</h1>}
      </div>
      <button disabled={isDisabled} onClick={IncreaseLimit}>
        Add 5 Users
      </button>
    </div>
  );
};

export default FetchUsers;
