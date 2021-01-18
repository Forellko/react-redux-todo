import React from "react";
import styles from "../styles/Footer.module.scss";

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
      <span className={styles.todo_count} id="count">
        <strong>{arrDoneFilter.length + " items left"}</strong>
      </span>
    );
  }
}
