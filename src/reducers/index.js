import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { typicodeReducer } from "./typicodeReducer";
import { typicodeReduxStateReducer } from "./typicodeReduxStateReducer";

const rootReducer = combineReducers({
  user: userReducer,
  typicode: typicodeReducer,
  typicodeReduxStateReducer: typicodeReduxStateReducer,
});

export default rootReducer;
