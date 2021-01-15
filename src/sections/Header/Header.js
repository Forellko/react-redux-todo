import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../store/todoList/todoListActionCreators";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.props.currentInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              this.props.addTask(e.target.value);
              e.target.value = "";
            }
          }}
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
