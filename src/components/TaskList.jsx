import React from 'react'
import ListUnit from './ListUnit';

export default class TaskList extends React.Component {
    
  render() {
    const task =  this.props.allTasks.map((elem, index)=>{
      return(
        <ListUnit key={index} id={index} taskText={elem.text} deleteTask={this.props.deleteTask} doneTask={this.props.doneTask} isDone={elem.isDone}/>
      )
    });

    return (
      <ul className="task-list">
         {task}
      </ul>
    )
  }
}