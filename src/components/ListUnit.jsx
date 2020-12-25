import React from 'react';

class ListUnit extends React.Component {

  render() {
    
    return (
      <li className="task-list__unit-task" >
        <textarea value={this.props.taskText}></textarea>
        <input type="button" value="del" onClick={() => {this.props.deleteTask(this.props.id)}}></input>
      </li>
        
    )
  }
}

export default ListUnit;