import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteTask,
  toggleTask,
  toggleAll,
} from "../../store/todoList/todoListActionCreators";
import ListUnit from "./components/ListUnit";
import styles from "./styles/Main.module.scss";

class Main extends Component {
  selectFilter(todoList, filter) {
    switch (filter) {
      case "all":
        return todoList;

      case "completed":
        return todoList.filter((elm) => {
          if (elm.isDone) {
            return true;
          }
          return false;
        });

      case "active":
        return todoList.filter((elm) => {
          if (elm.isDone) {
            return false;
          }
          return true;
        });

      default:
        return todoList;
    }
  }

  render() {
    const { deleteTask, toggleTask, toggleAll, todoList, filter } = this.props;

    const taskList = this.selectFilter(todoList, filter).map((elem, index) => (
      <ListUnit
        dataId={index}
        id={index}
        key={"key" + Math.random()}
        task={elem}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    ));

    return (
      <section className={styles.main}>
        <input
          id="toggle-all"
          type="checkbox"
          className={styles.toggle_all}
          onChange={toggleAll}
        />
        <label for="toggle-all"></label>
        <ul className={styles.todo_list}>{taskList}</ul>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  todoList: state.todoListReducer.todoList,
  filter: state.filterReducer.filter,
});

export default connect(mapStateToProps, {
  toggleAll,
  toggleTask,
  deleteTask,
})(Main);
