import React, { Component } from "react";
import ClearCompleted from "./items/clearCompleted";
import Counter from "./items/Counter";
import Filter from "./items/Filter";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer hidden">
        <Counter todoList={this.props.todoList}></Counter>
        <Filter filterTask={this.props.filterTask}></Filter>
        <ClearCompleted
          clearCompleted={this.props.clearCompleted}
          todoList={this.props.todoList}
        ></ClearCompleted>
      </footer>
    );
  }
}
