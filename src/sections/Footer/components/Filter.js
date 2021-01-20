/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import styles from "../Footer.module.scss";

export default class Filter extends React.Component {
  handleClickFilter(e, filter) {
    this.props.filterTask(filter);
  }

  render() {
    return (
      <ul className={styles.filters}>
        <li>
          <button id="all" onClick={(e) => this.handleClickFilter(e, "all")}>
            All{" "}
          </button>
        </li>
        <li>
          <button
            id="active"
            onClick={(e) => this.handleClickFilter(e, "active")}
          >
            Active{" "}
          </button>
        </li>
        <li>
          <button
            id="complete"
            onClick={(e) => this.handleClickFilter(e, "completed")}
          >
            Completed{" "}
          </button>
        </li>
      </ul>
    );
  }
}
