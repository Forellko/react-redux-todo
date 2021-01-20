import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteTask,
  toggleTask,
  toggleAll,
} from "../../store/todoList/todoListActionCreators";
import ListUnit from "./components/ListUnit";
import styles from "./Main.module.scss";
import { ReactComponent as ReactCompleteAll } from "../../images/complete_all.svg";
import selectFilter from "./MainSelector";

class Main extends Component {
  render() {
    const { deleteTask, toggleTask, toggleAll, selectFilter } = this.props;

    const taskList = selectFilter.map((elem) => (
      <ListUnit
        key={elem.id}
        task={elem}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    ));

    return (
      <section className={styles.main}>
        <input
          id="toggle-all"
          type="checkbox"
          className={styles.toggleAll}
          onChange={toggleAll}
        />
        <label htmlFor="toggle-all">
          <ReactCompleteAll
            height="25px"
            width="25px"
            className="complete_all_svg"
          />
        </label>
        <ul className={styles.todoList}>{taskList}</ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  selectFilter: selectFilter(state),
});

export default connect(mapStateToProps, {
  toggleAll,
  toggleTask,
  deleteTask,
})(Main);
