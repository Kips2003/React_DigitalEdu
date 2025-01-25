import "./css/App.css";
import "./css/reset.css";
import Counter from "./Components/Counter";
import Card from "./Components/Card";
import { useEffect, useState } from "react";

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  useEffect(() => {
    console.log("App comp useEff");
  });

  return (
    <div
      className="App"
      style={{
        color: "white",
        backgroundColor: "black",
        widows: "100%",
        height: "100%",
      }}
    >
      <h1>App</h1>

      {isDisabled && <Counter />}
      {showUsers && <Card />}

      <button
        disabled={isDisabled}
        onClick={() => {
          setIsDisabled(!isDisabled);
          if(showUsers){
            setShowUsers(!showUsers);
          }
        }}
        >
        Disable Counter
      </button>
      <button
        disabled={showUsers}
        onClick={() => {
          setShowUsers(!showUsers);
          if(isDisabled){
            setIsDisabled(!isDisabled);
          }
        }}
      >
        Show Users
      </button>
    </div>
  );
}

export default App;
