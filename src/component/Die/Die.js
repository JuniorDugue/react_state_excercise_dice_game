import React, { Component } from "react";

// import RollDice from "../RollDice/RollDice";

import "./die.scss";

export default class Die extends Component {
  render() {
    return (
      <div className="Die">
        <i
          className={`Die fas fa-dice-${this.props.face}
          ${this.props.rolling ? "shaking" : ""}`}
        />
      </div>
    );
  }
}
