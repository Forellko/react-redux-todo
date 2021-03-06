import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";
import TaskList from "./components/body/TaskList";
import Counter from "./components/footer/Counter";
import Filter from "./components/footer/Filter";
import {
  addTask,
  deleteTask,
  toggleTask,
  currentInputChange,
  filterTask,
} from "./store/todoReducer/actionCreator.js";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

class App extends React.Component {
  /*
  constructor(props) {
    super(props);

    this.addNewTask = this.addNewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.doneTask = this.doneTask.bind(this);
  }
  // addNewTask(newText) {
  //   this.resetFilter();
  //   let arrTasks = [...this.state.allTasks];
  //   arrTasks.push({ text: newText, isDone: false });
  //   this.mainTasks.push({ text: newText, isDone: false });
  //   this.setState({
  //     allTasks: arrTasks,
  //   });
  // }

  // deleteTask(index) {
  //   this.resetFilter();
  //   let arrTasks = this.state.allTasks.filter(
  //     (elem, indexArr) => indexArr !== index
  //   );
  //   this.mainTasks = [...arrTasks];
  //   this.setState({
  //     allTasks: arrTasks,
  //   });
  // }

  // doneTask(index) {
  //   const newArr = [...this.state.allTasks];
  //   newArr[index].isDone = !newArr[index].isDone;
  //   this.mainTasks = [...newArr];
  //   this.setState({ allTasks: newArr });
  // }

  // resetFilter() {
  //   this.setState({ allTasks: [...this.mainTasks] });
  // }

  // setFilter(e) {
  //   this.resetFilter();
  //   if (e.target.value === "all") {
  //     return;
  //   }

  //   if (e.target.value === "left") {
  //     let arrDoneFilter = this.mainTasks.filter((elem, index) => {
  //       if (elem.isDone) {
  //         return false;
  //       } else {
  //         return true;
  //       }
  //     });
  //     this.setState({
  //       allTasks: [...arrDoneFilter],
  //     });
  //   } else if (e.target.value === "done") {
  //     let arrDoneFilter = this.mainTasks.filter((elem, index) => {
  //       if (elem.isDone) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //     this.setState({
  //       allTasks: [...arrDoneFilter],
  //     });
  //   }
  // }
  */

  selectFilter() {
    switch (this.props.filter) {
      case "all":
        return this.props.todoList;

      case "done":
        return this.props.todoList.filter((elm) => {
          if (elm.isDone) {
            return true;
          }
          return false;
        });

      case "left":
        return this.props.todoList.filter((elm) => {
          if (elm.isDone) {
            return false;
          }
          return true;
        });

      default:
        return this.props.todoList;
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          className="toDoList__container"
          addTask={this.props.addTask}
          currentInputChange={this.props.currentInputChange}
          currentInput={this.props.currentInput}
        ></Header>
        <Body
          className="toDoList__container"
          deleteTask={this.props.deleteTask}
          toggleTask={this.props.toggleTask}
          todoList={this.selectFilter()}
        ></Body>
        <Footer
          className="toDoList__container"
          todoList={this.props.todoList}
          filterTask={this.props.filterTask}
        ></Footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentInput: state.todo.currentInput,
  todoList: state.todo.todoList,
  filter: state.todo.filter,
});

export default connect(mapStateToProps, {
  addTask,
  currentInputChange,
  deleteTask,
  toggleTask,
  filterTask,
})(App);
