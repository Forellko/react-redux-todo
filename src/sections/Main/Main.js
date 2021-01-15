import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleAll } from "../../store/manipulation/manipulationActionCreators";
import {
  deleteTask,
  toggleTask,
} from "../../store/todoList/todoListActionCreators";
import TaskList from "./components/TaskList";
import ToggleAll from "./components/ToggleAll";

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
    return (
      <section className="main" id="main">
        <ToggleAll toggleAll={this.props.toggleAll} />
        <TaskList
          toggleTask={this.props.toggleTask}
          deleteTask={this.props.deleteTask}
        />
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
