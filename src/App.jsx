import React from 'react';
import './App.css';
import InputNewTask from './components/InputNewTask';
import TaskList from './components/TaskList'
import Filter from './components/Filter'


class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      allTasks: []
    };
    this.addNewTask = this.addNewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addNewTask (task) {
    let arrTasks = [...this.state.allTasks];
    arrTasks.push(task);
    this.setState({
      allTasks: arrTasks,
    });
  }

  deleteTask (index) {
    let arrTasks = this.state.allTasks.filter((elem, indexArr)=> indexArr !== index )
    this.setState({
      allTasks: arrTasks,
    });
  }

  render() {
    return (<div className="App">
      <InputNewTask newTask={this.addNewTask}></InputNewTask>
      <TaskList allTasks={this.state.allTasks} deleteTask={this.deleteTask}></TaskList>
      <Filter></Filter>
    </div>)
  }
}

export default App;