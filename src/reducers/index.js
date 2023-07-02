import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { typicodeReducer } from "./typicodeReducer";

const rootReducer = combineReducers({
  user: userReducer,
  typicode: typicodeReducer,
});

export default rootReducer;
