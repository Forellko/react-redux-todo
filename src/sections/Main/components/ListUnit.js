import React from "react";
import styles from "../styles/Main.module.scss";

class ListUnit extends React.Component {
  render() {
    const { task, toggleTask, deleteTask } = this.props;
    return (
      <li className={styles.todo_list__unit}>
        <div className={styles.view}>
          <input
            className={styles.toggle}
            type="checkbox"
            onClick={(e) => {
              toggleTask(task);
            }}
            checked={task.isDone}
          ></input>
          <label>{task.text}</label>
          <button
            className={styles.destroy}
            onClick={() => {
              deleteTask(task);
            }}
          ></button>
        </div>
      </li>
    );
  }
}

export default ListUnit;
