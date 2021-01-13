import React, { Component } from "react";
import Counter from "./items/Counter";
import Filter from "./items/Filter";

export default class Footer extends Component {
  render() {
    return (
      <footer className="toDoList__container">
          <Counter></Counter>
          <Filter></Filter>
      </footer>
    );
  }
}
