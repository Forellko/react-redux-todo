/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import styles from "../styles/Footer.module.scss";

export default class Filter extends React.Component {
  onClickFilter(e) {}

  render() {
    const { filterTask } = this.props;

    return (
      <ul className={styles.filters}>
        <li>
          <a
            id="all"
            onClick={(e) => {
              e.preventDefault();
              filterTask("all");
            }}
          >
            All{" "}
          </a>
        </li>
        <li>
          <a
            id="active"
            onClick={(e) => {
              e.preventDefault();
              filterTask("active");
            }}
          >
            Active{" "}
          </a>
        </li>
        <li>
          <a
            id="completed"
            onClick={(e) => {
              e.preventDefault();
              filterTask("completed");
            }}
          >
            Completed{" "}
          </a>
        </li>
      </ul>
    );
  }
}
