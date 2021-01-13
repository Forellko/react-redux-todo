import React from "react";

class InputNewTask extends React.Component {
    // constructor (props) {
    //   super(props);
    //  }
  
    onChangeInputTask(e) {
      this.props.currentInputChange(e.target.value);
    }
  
    onSubmitInputTask() {
      this.props.addTask(this.props.currentInput);
      this.props.currentInputChange("");
    }
  
    render() {
      return (
        <form
          className="header__newTodo"
        >
          <input
            className="header__input header__input-edit"
            placeholder="What needs to be done?"
            value={this.props.currentInput}
            onChange={(e) => {
              e.preventDefault();
              this.onChangeInputTask(e);
            }}
          onSubmit={(e) => {
            e.preventDefault();
            this.onSubmitInputTask();
          }}
          ></input>
        </form>
      );
    }
  }

export default InputNewTask;
