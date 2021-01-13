import React from "react";
import ListUnit from "./ListUnit";

export default class TaskList extends React.Component {
  render() {
    const task = this.props.todoList.map((elem, index) => {
      return (
        <ListUnit
          className="task-list"
          key={"key" + Math.random()}
          task={elem}
          deleteTask={this.props.deleteTask}
          toggleTask={this.props.toggleTask}
        />
      );
    });

    return <ul className="task-list">{task}</ul>;
  }
}
