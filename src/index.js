import React from "react";
import ReactDOM from "react-dom";

import Die from "./component/Die/Die";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Die face="one" />
      <Die face="four" />
      <Die face="two" />
      <Die face="six" />
      <Die face="three" />
      <Die face="five" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
