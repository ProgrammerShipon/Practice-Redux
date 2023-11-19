import { combineReducers } from "redux";
import counterReducer from "./Counter/CounterReducer";
import dynamicCounterReducer from "./DynamicCounter/DynamicCounterReducer";
import ToPropsCounterReducer from "./ToPropsCounter/ToPropsCounterReducer";

const rootReducer = combineReducers({
  ToPropsCounter: ToPropsCounterReducer,
  counterReducer: counterReducer,
  dynamicCounterReducer: dynamicCounterReducer,
});

export default rootReducer;
