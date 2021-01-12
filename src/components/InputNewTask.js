import React from 'react'

class InputNewTask extends React.Component {

  // constructor (props) {
  //   super(props);
  //  }

  onSubmitInputTask(e) {
    this.props.newTask(e.target.children[0].value); // поле ввода
    e.target.children[0].value = '';
  }

  render() {


    return (
      <div className="input-new-task">
        <form className="input-new-task__form"  onSubmit={(e) => {e.preventDefault(); this.onSubmitInputTask(e)}}>
          <input className="input-new-task__input"></input>
        </form>
      </div>
    )
  }
}

export default InputNewTask;