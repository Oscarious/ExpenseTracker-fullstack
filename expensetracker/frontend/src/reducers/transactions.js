import moment from "moment";
import { deleteTransaction } from "../actions/transactions";
import { Navigate } from "react-router-dom";
import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_BY_DATE,
} from "../actions/types";

const initialState = {
  transactions: [],
  transactionsByDate: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS_BY_DATE:
      return {
        ...state,
        transactionsByDate: action.payload,
      };
    case GET_TRANSACTIONS: {
      return {
        ...state,
        transactions: action.payload,
      };
    }
    case DELETE_TRANSACTION: {
      // console.log(action.payload);
      // const deletedTransaction = action.payload;
      // const transactionsByDate = state.transactionsByDate;
      // console.log(deletedTransaction);
      // transactionsByDate[deletedTransaction.created_at] = transactionsByDate[
      //   deletedTransaction.created_at
      // ].filter((transaction) => transaction.id !== deletedTransaction.id);
      // return {
      //   ...state,
      //   transactions: state.transactions.filter(
      //     (transaction) => transaction.id !== deletedTransaction.id
      //   ),
      //   transactionsByDate: transactionsByDate
      // };
    }
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
