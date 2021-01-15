import React from "react";

class ListUnit extends React.Component {
  render() {
    const { task, toggleTask, deleteTask } = this.props;
    return (
      <li className="todo-list__unit">
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={(e) => {
              toggleTask(task);
            }}
            checked={task.isDone}
          ></input>
          <label>{task.text}</label>
          <button
            className="destroy"
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
