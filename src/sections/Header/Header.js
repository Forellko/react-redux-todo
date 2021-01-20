import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../store/todoList/todoListActionCreators";
import styles from "./Header.module.scss";

class Header extends React.Component {
  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.props.addTask(e.target.value);
      e.target.value = "";
    }
  };

  render() {
    return (
      <header className={styles.header}>
        <h1>todos</h1>
        <input
          className={styles.newTodo}
          placeholder="What needs to be done?"
          onKeyDown={this.handleKeyDown}
        ></input>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoListReducer.todoList,
});

export default connect(mapStateToProps, {
  addTask,
})(Header);
