import React, { Component } from "react";

export default class ClearCompleted extends Component {
  render() {
    return (
      <button className="clear-completed" onClick={this.props.clearCompleted}>
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
