import React from 'react';
import './App.css';
import InputNewTask from './components/InputNewTask';
import TaskList from './components/TaskList'
import Filter from './components/Filter'


class App extends React.Component {

  constructor (props) {
    super(props);
    this.mainTasks = [];
    this.indexDoneTasks = new Set();
    this.state = {
      allTasks: [],
    };
    this.addNewTask = this.addNewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.doneTask = this.doneTask.bind(this);
  }

  addNewTask (task) {
    this.resetFilter();
    let arrTasks = [...this.state.allTasks];
    arrTasks.push(task);
    this.mainTasks.push(task);
    this.setState({
      allTasks: arrTasks,
    });
  }

  deleteTask (index) {
    this.resetFilter();
    let arrTasks = this.state.allTasks.filter((elem, indexArr)=> indexArr !== index )
    this.mainTasks = [...arrTasks];
    this.setState({
      allTasks: arrTasks,
    });
  }

  doneTask (index) {
    if(this.indexDoneTasks.has(index)) {
      this.indexDoneTasks.delete(index);
    } else {
      this.indexDoneTasks.add(index);
    }
  }

  resetFilter() {
    this.setState({allTasks: [...this.mainTasks]});
  }

  setFilter(e) {
    this.resetFilter();
    if (e.target.value === 'all') {
      return;
    }

    const doneIndex = Array.from(this.indexDoneTasks);
    if(e.target.value === 'left') {
  } else if (e.target.value === 'done') {
    let arrDoneFilter = doneIndex.map((index)=> this.state.allTasks[index])
    this.setState(
        {
          allTasks: [...arrDoneFilter]
        }
      )
    }

  }

  render() {
    return (<div className="App">
      <InputNewTask newTask={this.addNewTask}></InputNewTask>
      <TaskList allTasks={this.state.allTasks} deleteTask={this.deleteTask} doneTask={this.doneTask}></TaskList>
      <Filter setFilter={this.setFilter}></Filter>
    </div>)
  }
}

export default App;