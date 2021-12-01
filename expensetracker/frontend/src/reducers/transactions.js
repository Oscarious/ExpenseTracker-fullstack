import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  GET_TRANSACTIONS,
} from "../actions/types";

const initialState = {
  transactions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
