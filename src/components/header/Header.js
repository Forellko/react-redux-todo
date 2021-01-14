import React from "react";
import InputNewTask from "./items/inputTask";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <InputNewTask
          addTask={this.props.addTask}
          currentInputChange={this.props.currentInputChange}
          currentInput={this.props.currentInput}
        ></InputNewTask>
      </header>
    );
  }
}
