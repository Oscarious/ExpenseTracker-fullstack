import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  GET_TRANSACTIONS,
  UPDATE_TRANSACTION,
} from "../actions/types";

const initialState = {
  transactions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS: {
      return {
        ...state,
        transactions: action.payload,
      };
    }
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
    case UPDATE_TRANSACTION: {
      const newTransactions = state.transactions.map((transaction) => {
        // console.log(transaction, action.payload)
        if (transaction.id === action.payload.id) {
          return action.payload;
        }
        return transaction;
      });
      return {
        ...state,
        transactions: newTransactions,
      };
    }

    default:
      return state;
  }
};
