import React from "react";

class ListUnit extends React.Component {
  render() {
    return (
      <li className="task-list__unit">
        <textarea
          className="unit__text"
          value={this.props.task.text}
        ></textarea>
        <input
          type="checkbox"
          onClick={(e) => {
            this.props.toggleTask(this.props.task);
          }}
          checked={this.props.task.isDone}
        ></input>
        <input
          type="button"
          value="del"
          onClick={() => {
            this.props.deleteTask(this.props.task);
          }}
        ></input>
      </li>
    );
  }
}

export default ListUnit;
