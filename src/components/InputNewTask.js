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
      <div className="input-new-task">
        <form
          className="input-new-task__form"
          onSubmit={(e) => {
            e.preventDefault();
            this.onSubmitInputTask();
          }}
        >
          <input
            className="input-new-task__input"
            value={this.props.currentInput}
            onChange={(e) => {
              e.preventDefault();
              this.onChangeInputTask(e);
            }}
          ></input>
        </form>
      </div>
    );
  }
}

export default InputNewTask;
