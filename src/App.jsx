import React from 'react';
import './App.css';
import InputNewTask from './components/InputNewTask';
import TaskList from './components/TaskList'
import Filter from './components/Filter'


class App extends React.Component {

  constructor (props) {
    super(props);
    this.mainTasks = [];
    this.state = {
      allTasks: [],
    };
    this.addNewTask = this.addNewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  addNewTask (task) {
    this.setState({allTasks: [...this.mainTasks]});
    let arrTasks = [...this.state.allTasks];
    arrTasks.push(task);
    this.mainTasks.push(task);
    this.setState({
      allTasks: arrTasks,
    });
  }

  deleteTask (index) {
    this.setState({allTasks: [...this.mainTasks]});
    let arrTasks = this.state.allTasks.filter((elem, indexArr)=> indexArr !== index )
    this.mainTasks = [...arrTasks];
    this.setState({
      allTasks: arrTasks,
    });
  }

  resetFilter() {
    this.setState({allTasks: [...this.mainTasks]});
  }

  setFilter(e) {
    if(e.target.value === 'left') {

    } else if (e.target.value === 'done') {

    } else if (e.target.value === 'all') {

    }
  }

  render() {
    return (<div className="App">
      <InputNewTask newTask={this.addNewTask}></InputNewTask>
      <TaskList allTasks={this.state.allTasks} deleteTask={this.deleteTask}></TaskList>
      <Filter setFilter={this.setFilter}></Filter>
    </div>)
  }
}

export default App;