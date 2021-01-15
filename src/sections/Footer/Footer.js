import React, { Component } from "react";
import ClearCompleted from "./components/ClearCompleted";
import Counter from "./components/Counter";
import Filter from "./components/Filter";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer hidden">
        <Counter todoList={this.props.todoList} />
        <Filter filterTask={this.props.filterTask} />
        <ClearCompleted
          clearCompleted={this.props.clearCompleted}
          todoList={this.props.todoList}
        />
      </footer>
    );
  }
}
