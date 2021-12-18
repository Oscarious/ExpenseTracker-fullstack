import {
  ADD_TRANSACTION_ERROR,
  UPDATE_TRANSACTION_ERROR,
  EMPTY_TEXT_ERROR,
  LOGIN_ERROR,
  REGISTER_ERROR,
} from "../actions/types";

const initialState = {
  msg: null,
  status: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPTY_TEXT_ERROR:
    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case ADD_TRANSACTION_ERROR:
    case UPDATE_TRANSACTION_ERROR:
      return { ...state, msg: action.payload.msg, status: action.payload.msg };
    default:
      return state;
  }
};
