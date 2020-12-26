import React from 'react';

class ListUnit extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isDone: false
    }
  }
  

  render() {
    
    return (
      <li className="task-list__unit-task" >
        <textarea value={this.props.taskText}></textarea>
        <input type="checkbox" onClick={(e) => { this.props.doneTask(this.props.id); this.setState({isDone: !this.state.isDone}) }} checked={this.state.isDone}></input>
        <input type="button" value="del" onClick={() => {this.props.deleteTask(this.props.id)}}></input>
      </li>
        
    )
  }
}

export default ListUnit;