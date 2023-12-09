import { combineReducers } from "redux";
import FilterReducer from "./Filters/FilterReducer";
import todosReducer from "./Todos/TodosReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: FilterReducer,
});

export default rootReducer;
