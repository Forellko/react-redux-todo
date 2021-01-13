import { combineReducers, createStore } from "redux";
import todoReducer from "./todoReducer/reducer";

let reducers = combineReducers({
  todo: todoReducer,
});

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
