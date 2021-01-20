import React, { Component } from "react";
import { connect } from "react-redux";
import { filterTasks } from "../../store/filter/filterActionCreators";
import { clearCompleted } from "../../store/todoList/todoListActionCreators";
import ClearCompleted from "./components/ClearCompleted";
import Counter from "./components/Counter";
import Filter from "./components/Filter";
import styles from "./Footer.module.scss";

class Footer extends Component {
  render() {
    const { todoList, filterTasks, clearCompleted } = this.props;
    return (
      <footer className={todoList.length ? styles.footer : styles.footer__none}>
        <Counter todoList={todoList} />
        <Filter filterTask={filterTasks} />
        <ClearCompleted
          handleClearCompleted={clearCompleted}
          todoList={todoList}
        />
      </footer>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoListReducer.todoList,
});

export default connect(mapStateToProps, {
  clearCompleted,
  filterTasks,
})(Footer);
