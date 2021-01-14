import React from "react";
import TaskListUnit from "./TaskListUnit";

export default class TaskList extends React.Component {
  render() {
    const task = this.props.todoList.map((elem, index) => (
      <TaskListUnit
        dataId={index}
        id={index}
        key={"key" + Math.random()}
        task={elem}
        deleteTask={this.props.deleteTask}
        toggleTask={this.props.toggleTask}
      />
    ));

    return <ul className="todo-list">{task}</ul>;
  }
}
