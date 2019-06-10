import React from "react";
import ReactDOM from "react-dom";

// import Die from "./component/Die/Die";
import RollDice from "./component/RollDice/RollDice";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <RollDice />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
