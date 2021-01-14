import React, { Component } from "react";
import ClearCompleted from "./components/ClearCompleted";
import Counter from "./components/Counter";
import Filter from "./components/Filter";

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
