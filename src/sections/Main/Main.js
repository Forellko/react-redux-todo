import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteTask,
  toggleTask,
  toggleAll,
} from "../../store/todoList/todoListActionCreators";
import ListUnit from "./components/ListUnit";
import styles from "./styles/Main.module.scss";
import { ReactComponent as ReactCompleteAll } from "../../images/complete_all.svg";
import { createSelector } from "reselect";

class Main extends Component {
  render() {
    const { deleteTask, toggleTask, toggleAll, selectFilter } = this.props;

    const taskList = selectFilter.map((elem, index) => (
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
        <label for="toggle-all">
          <ReactCompleteAll
            height="25px"
            width="25px"
            className="complete_all_svg"
          ></ReactCompleteAll>
        </label>
        <ul className={styles.todo_list}>{taskList}</ul>
      </section>
    );
  }
}

const filterSelector = (state) => state.filter;
const todoListSelector = (state) => state.todoList;
const selectFilter = createSelector(
  [todoListSelector, filterSelector],
  (todoList, filter) => {
    switch (filter) {
      case "all":
        return todoList;

      case "completed":
        return todoList.filter((elm) => {
          return elm.isDone;
        });

      case "active":
        return todoList.filter((elm) => {
          return !elm.isDone;
        });

      default:
        return todoList;
    }
  }
);

const mapStateToProps = (state) => ({
  todoList: state.todoListReducer.todoList,
  filter: state.filterReducer.filter,
  selectFilter: selectFilter({
    todoList: state.todoListReducer.todoList,
    filter: state.filterReducer.filter,
  }),
});

export default connect(mapStateToProps, {
  toggleAll,
  toggleTask,
  deleteTask,
})(Main);
