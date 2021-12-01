import { combineReducers } from "redux";
import transactionsReducer from "./transactions";
import errorsReducer from "./errors";

export default combineReducers({
  transactionsReducer,
  errorsReducer,
});