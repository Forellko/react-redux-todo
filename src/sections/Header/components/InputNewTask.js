import React from "react";

class InputNewTask extends React.Component {
  // constructor (props) {
  //   super(props);
  //  }

  onInputTask(e) {}

  render() {
    return (
      <form className="header__newTodo">
        <input
          className="new-todo"
          id="new-todo"
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
      </form>
    );
  }
}

export default InputNewTask;
