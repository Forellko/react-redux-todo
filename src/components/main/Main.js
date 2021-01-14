import React, { Component } from "react";
import TaskList from "./items/TaskList";
import ToggleAll from "./items/ToggleAll";

export default class Main extends Component {
  render() {
    return (
      <section className="main" id="main">
        <ToggleAll></ToggleAll>
        <TaskList
          deleteTask={this.props.deleteTask}
          toggleTask={this.props.toggleTask}
          todoList={this.selectFilter()}
        ></TaskList>
      </section>
    );
  }
}
