import { combineReducers, createStore } from "redux";
import todoListReducer from "./todoList/todoListReducer";
import filterReducer from "./filter/filterReducer";

let reducers = combineReducers({
  todoListReducer,
  filterReducer,
});

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
