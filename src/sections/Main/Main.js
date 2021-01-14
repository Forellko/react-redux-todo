import React, { Component } from "react";
import TaskList from "./components/TaskList";
import ToggleAll from "./components/ToggleAll";

export default class Main extends Component {
  render() {
    return (
      <section className="main" id="main">
        <ToggleAll toggleAll={this.props.toggleAll}></ToggleAll>
        <TaskList
          deleteTask={this.props.deleteTask}
          toggleTask={this.props.toggleTask}
          todoList={this.props.todoList}
        ></TaskList>
      </section>
    );
  }
}
