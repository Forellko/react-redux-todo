import React from "react";

export default class Counter extends React.Component {
  render() {
    const arrDoneFilter = this.props.todoList.filter((elem) => {
      if (elem.isDone) {
        return false;
      } else {
        return true;
      }
    });
    return (
      <span className="todo-count" id="count">
        <strong>{arrDoneFilter.length + " items left"}</strong>
      </span>
    );
  }
}
