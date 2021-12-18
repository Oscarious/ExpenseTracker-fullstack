import {
  ADD_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_SUCCESS,
  UPDATE_TRANSACTION_SUCCESS,
} from "../actions/types";

const initialState = {
  msg: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION_SUCCESS:
    case DELETE_TRANSACTION_SUCCESS:
    case UPDATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        msg: action.msg,
      };
    default:
      return state;
  }
};
