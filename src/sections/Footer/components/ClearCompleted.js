import React, { Component } from "react";
import styles from "../styles/Footer.module.scss";

export default class ClearCompleted extends Component {
  render() {
    return (
      <button
        className={styles.clear_completed}
        onClick={this.props.clearCompleted}
      >
        Clear completed [
        {
          <span>
            {
              this.props.todoList.filter((elm) => {
                if (elm.isDone) return true;
                return false;
              }).length
            }
          </span>
        }
        ]
      </button>
    );
  }
}
