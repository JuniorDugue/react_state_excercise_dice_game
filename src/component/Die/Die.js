import React, { Component } from "react";

// import RollDice from "../RollDice/RollDice";

import "./die.scss";

export default class Die extends Component {
  render() {
    return (
      <div className="Die">
        <i className={`fas fa-dice-${this.props.face}`} />
      </div>
    );
  }
}
