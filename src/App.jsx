import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import InputNewTask from './components/InputNewTask';
import TaskList from './components/TaskList'
import Counter from './components/Counter'
import Filter from './components/Filter'
import { addTask, deleteTask, toggleTask} from './store/todoReducer/actionCreator.js'

class App extends React.Component {

  constructor (props) {
    super(props);
    
    this.addNewTask = this.addNewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.doneTask = this.doneTask.bind(this);
    console.log(this.props.filter);
  }
  addNewTask (newText) {
    this.resetFilter();
    let arrTasks = [...this.state.allTasks];
    arrTasks.push({text: newText, isDone: false});
    this.mainTasks.push({text: newText, isDone: false});
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
    const newArr = [...this.state.allTasks];
    newArr[index].isDone = !newArr[index].isDone;
    this.mainTasks = [...newArr];
    this.setState({allTasks: newArr});
  }

  resetFilter() {
    this.setState({allTasks: [...this.mainTasks]});
  }

  setFilter(e) {
    this.resetFilter();
    if (e.target.value === 'all') {
      return;
    }

    if(e.target.value === 'left') {
      let arrDoneFilter = this.mainTasks.filter((elem, index) => {if(elem.isDone) {return false} else {return true} } )
      this.setState(
          {
            allTasks: [...arrDoneFilter]
          }
        )
      }
    else if (e.target.value === 'done') {
    let arrDoneFilter = this.mainTasks.filter((elem, index) => {if(elem.isDone) {return true} else {return false} } )
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
      <Counter  mainTasks={this.mainTasks}></Counter>
      <Filter  setFilter={this.setFilter}></Filter>
    </div>)
  }
}


const mapStateToProps = (state) => ({
  currentInput: state?.todo.currentInput,
  allTasks: state?.todo.allTasks,
  filter: state?.todo.filter,
});

export default connect(mapStateToProps, { addTask, deleteTask, toggleTask})(App);
