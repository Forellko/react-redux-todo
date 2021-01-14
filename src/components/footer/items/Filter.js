/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

export default class Filter extends React.Component {
  onClickFilter(e) {}

  render() {
    return (
      <ul className="filters">
        <li>
          <a
            href="#/"
            id="all"
            className=""
            onClick={(e) => {
              e.preventDefault();
              this.props.filterTask('all');
            }}
          >
            All{" "}
          </a>{" "}
        </li>
        <li>
          <a
            href="#/active"
            id="active"
            className=""
            onClick={(e) => {
              e.preventDefault();
              this.props.filterTask('active');
            }}
          >
            Active{" "}
          </a>{" "}
        </li>
        <li>
          <a
            href="#/completed"
            id="completed"
            className=""
            onClick={(e) => {
              e.preventDefault();
              this.props.filterTask('completed');
            }}
          >
            Completed{" "}
          </a>{" "}
        </li>
      </ul>
    );
  }
}
