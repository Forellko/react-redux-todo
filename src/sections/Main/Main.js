import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleAll } from "../../store/manipulation/manipulationActionCreators";
import {
  deleteTask,
  toggleTask,
} from "../../store/todoList/todoListActionCreators";
import ListUnit from "./components/ListUnit";

class Main extends Component {
  selectFilter() {
    switch (this.props.filter) {
      case "all":
        return this.props.todoList;

      case "completed":
        return this.props.todoList.filter((elm) => {
          if (elm.isDone) {
            return true;
          }
          return false;
        });

      case "active":
        return this.props.todoList.filter((elm) => {
          if (elm.isDone) {
            return false;
          }
          return true;
        });

      default:
        return this.props.todoList;
    }
  }

  render() {
    const taskList = this.props.todoList.map((elem, index) => (
      <ListUnit
        dataId={index}
        id={index}
        key={"key" + Math.random()}
        task={elem}
        deleteTask={this.props.deleteTask}
        toggleTask={this.props.toggleTask}
      />
    ));

    return (
      <section className="main">
        <>
          <input
            id="toggle-all"
            type="checkbox"
            className="toggle-all"
            onChange={this.props.toggleAll}
          />
          <label for="toggle-all"></label>
        </>
        <ul className="todo-list">{taskList}</ul>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  todoList: state.todoListReducer.todoList,
});

export default connect(mapStateToProps, {
  toggleAll,
  toggleTask,
  deleteTask,
})(Main);
