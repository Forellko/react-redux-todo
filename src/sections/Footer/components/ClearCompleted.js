import React, { Component } from "react";
import styles from "../Footer.module.scss";

export default class ClearCompleted extends Component {
  calcDoneTask = () => {
    return this.props.todoList.filter((elm) => {
      return elm.isDone;
    }).length;
  };

  render() {
    return (
      <button
        className={styles.clearCompleted}
        onClick={this.props.handleClearCompleted}
      >
        Clear completed [{<span>{this.calcDoneTask()}</span>}]
      </button>
    );
  }
}
