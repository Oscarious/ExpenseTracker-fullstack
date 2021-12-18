import { combineReducers } from "redux";
import transactionsReducer from "./transactions";
import errorsReducer from "./errors";
import authReducer from "./auth";
import messageReducer from "./messages";

export default combineReducers({
  transactionsReducer,
  errorsReducer,
  authReducer,
  messageReducer,
});
