import React, { Component } from "react";
import clearCompleted from "./items/clearCompleted";
import Counter from "./items/Counter";
import Filter from "./items/Filter";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
          <Counter></Counter>
          <Filter></Filter>
          <clearCompleted></clearCompleted>
      </footer>
    );
  }
}
