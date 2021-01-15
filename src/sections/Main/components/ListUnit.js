import React from "react";

class ListUnit extends React.Component {
  render() {
    return (
      <li className="todo-list__unit">
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={(e) => {
              this.props.toggleTask(this.props.task);
            }}
            checked={this.props.task.isDone}
          ></input>
          <label>{this.props.task.text}</label>
          <button
            className="destroy"
            onClick={() => {
              this.props.deleteTask(this.props.task);
            }}
          ></button>
        </div>
      </li>
    );
  }
}

export default ListUnit;
