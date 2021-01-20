import React from "react";
import styles from "../Footer.module.scss";

export default class Counter extends React.Component {
  render() {
    const arrDoneFilter = this.props.todoList.filter((elem) => {
      return !elem.isDone;
    });
    return (
      <span className={styles.todoCount} id="count">
        <strong>{arrDoneFilter.length + " items left"}</strong>
      </span>
    );
  }
}
