import { combineReducers, createStore } from "redux";
import todoListReducer from "./todoList/todoListReducer";
import manipulationReducer from "./manipulation/manipulationReducer";
import filterReducer from "./filter/filterReducer";

let reducers = combineReducers({
  todoListReducer,
  manipulationReducer,
  filterReducer,
});

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
