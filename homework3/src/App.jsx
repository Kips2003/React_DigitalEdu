import Card from "./Components/Card";
import "./css/App.css";
import User from "./Components/User";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { users } from "./metadata/metadata.js";

function App() {
  const [visibleUsers, setVisibleUsers] = useState(5);

  const handleShowMore = () => {
    setVisibleUsers(10);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route
          path="/mainPage"
          element={
            <>
              <div className="innerDiv" style={{ width: "100%" }}>
                {users.slice(0, visibleUsers).map((user) => (
                  <Card {...user} />
                ))}
              </div>
              <div className="outerDiv">
                {visibleUsers < 10 && users.length > 5 && (
                  <button className="button" onClick={handleShowMore}>
                    More Users
                  </button>
                )}
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
