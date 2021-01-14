import React from "react";

export default class Filter extends React.Component {
  onClickFilter(e) {}

  render() {
    return (
      <ul
        className="filters"
        onClick={(e) => {
          e.preventDefault();
          this.props.filterTask(e.target.value);
        }}
      >
        <li>
          <a href="#/" id="all" className=""></a> All{" "}
        </li>
        <li>
          <a href="#/active" id="active" className=""></a> Active{" "}
        </li>
        <li>
          <a href="#/completed" id="completed" className=""></a> Completed{" "}
        </li>
      </ul>
    );
  }
}
