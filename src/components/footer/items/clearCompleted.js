import React, { Component } from "react";

export default class clearCompleted extends Component {
  render() {
    return (
      <button className="clear-completed">
        {"Clear completed ["}
        <span></span>
        {"]"}
      </button>
    );
  }
}
