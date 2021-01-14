import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "./sections/Header/Header";
import Main from "./sections/Main/Main";
import Footer from "./sections/Footer/Footer";
import {
  addTask,
  deleteTask,
  toggleTask,
  filterTask,
  clearCompleted,
  toggleAll,
} from "./store/todoReducer/actionCreator.js";

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

      case "completed":
        return this.props.todoList.filter((elm) => {
          if (elm.isDone) {
            return true;
          }
          return false;
        });

      case "active":
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
      <section className="todoapp">
        <Header
          addTask={this.props.addTask}
          currentInputChange={this.props.currentInputChange}
          currentInput={this.props.currentInput}
        ></Header>
        <Main
          className="toDoList__container"
          deleteTask={this.props.deleteTask}
          toggleTask={this.props.toggleTask}
          toggleAll={this.props.toggleAll}
          todoList={this.selectFilter()}
        ></Main>
        <Footer
          className="toDoList__container"
          todoList={this.props.todoList}
          filterTask={this.props.filterTask}
          clearCompleted={this.props.clearCompleted}
        ></Footer>
      </section>
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
  deleteTask,
  toggleTask,
  filterTask,
  clearCompleted,
  toggleAll,
})(App);
