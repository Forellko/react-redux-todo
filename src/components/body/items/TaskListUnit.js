import React from "react";


class ListUnit extends React.Component {
  render() {
    return (
      <li className="task-list__unit">
        <input
          className="toggle"
          type="checkbox"
          onClick={(e) => {
            this.props.toggleTask(this.props.task);
          }}
          checked={this.props.task.isDone}
        ></input>
        <textarea
          className="editing"
          value={this.props.task.text}
          readOnly={true}
        ></textarea>
        <input
          className='destroy'
          type="button"
          value="X"
          onClick={() => {
            this.props.deleteTask(this.props.task);
          }}
        ></input>
      </li>
    );
  }
}

export default ListUnit;
