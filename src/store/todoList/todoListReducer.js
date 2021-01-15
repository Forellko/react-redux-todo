/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */

import initialState from "../todoListInitialState";
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./todoListActions";

const todoListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        todoList: [
          ...state.todoList,
          {
            id: "id" + Math.random(),
            text: payload,
            isDone: false,
          },
        ],
      };

    case DELETE_TASK:
      return {
        todoList: [
          ...state.todoList.filter((elm) => {
            if (payload.id === elm.id) return false;
            return true;
          }),
        ],
      };

    case TOGGLE_TASK:
      return {
        todoList: [
          ...state.todoList.map((elm) => {
            if (payload.id === elm.id) elm.isDone = !elm.isDone;
            return elm;
          }),
        ],
      };

    default:
      return state;
  }
};

export default todoListReducer;
