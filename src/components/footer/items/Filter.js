/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

export default class Filter extends React.Component {
  onClickFilter(e) {}

  render() {
    const { filterTask } = this.props;

    return (
      <ul className="filters">
        <li>
          <a
            href="#/"
            id="all"
            className=""
            onClick={(e) => {
              e.preventDefault();
              filterTask("all");
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
              filterTask("active");
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
              filterTask("completed");
            }}
          >
            Completed{" "}
          </a>{" "}
        </li>
      </ul>
    );
  }
}
