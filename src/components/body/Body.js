import React, { Component } from "react";
import TaskList from "./items/TaskList";

export default class Body extends Component {
  render() {
    return (
      <section>
        <TaskList
            deleteTask={this.props.deleteTask}
            toggleTask={this.props.toggleTask}
            todoList={this.selectFilter()}
        ></TaskList>
      </section>
    );
  }
}
