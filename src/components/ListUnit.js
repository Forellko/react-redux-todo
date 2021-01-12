import React from 'react';

class ListUnit extends React.Component {
  
  render() {
    
    return (
      <li className="task-list__unit" >
        <textarea className="unit__text" value={this.props.taskText}></textarea>
        <input type="checkbox" onClick={(e) => { this.props.doneTask(this.props.id); }} checked={this.props.isDone}></input>
        <input type="button" value="del" onClick={() => {this.props.deleteTask(this.props.id)}}></input>
      </li>
        
    )
  }
}

export default ListUnit;