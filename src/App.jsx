import React from "react";
import "./App.css";
import Header from "./sections/Header/Header";
import Main from "./sections/Main/Main";
import Footer from "./sections/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <section className="todoapp">
        <Header />
        <Main />
        {/* <Footer
          className="toDoList__container"
          todoList={this.props.todoList}
          filterTask={this.props.filterTask}
          clearCompleted={this.props.clearCompleted}
        /> */}
      </section>
    );
  }
}

export default App;
