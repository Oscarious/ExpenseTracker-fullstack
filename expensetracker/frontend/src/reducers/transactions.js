import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  FILTER_TRANSACTIONS,
  GET_TRANSACTIONS,
  SORT_TRANSACTIONS,
  UPDATE_TRANSACTION,
} from "../actions/types";
import {
  FURTHEST_FUTURE_DATE_STR,
  FURTHEST_PREVIOUS_DATE_STR,
} from "../common/constants";
import { date2LocaleDateStr } from "../common/utils";

const initialState = {
  transactions: [],
  displayedTransactions: [],
  sortOrder: {
    created_at: 1,
    subject: 1,
    amount: 1,
  },
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
    case FILTER_TRANSACTIONS: {
      const condition = action.payload;
      const fromDateStr = condition.from
        ? date2LocaleDateStr(condition.from)
        : FURTHEST_PREVIOUS_DATE_STR;
      const toDateStr = condition.to
        ? date2LocaleDateStr(condition.to)
        : FURTHEST_FUTURE_DATE_STR;
      const maxAmount = condition.maxAmount
        ? condition.maxAmount
        : Number.POSITIVE_INFINITY;
      const minAmount = condition.minAmount
        ? condition.minAmount
        : Number.NEGATIVE_INFINITY;
      // filter date
      const newDispalyedTransactions = state.transactions.filter(
        (transaction) => {
          if (
            transaction.amount <= maxAmount &&
            transaction.amount >= minAmount &&
            transaction.created_at.localeCompare(fromDateStr) >= 0 &&
            transaction.created_at.localeCompare(toDateStr) <= 0
          ) {
            if (condition.subject.index === 0) {
              return true;
            }
            return condition.subject.value === transaction.subject;
          }
          return false;
        }
      );
      return {
        ...state,
        displayedTransactions: newDispalyedTransactions,
      };
    }
    case SORT_TRANSACTIONS: {
      const keyword = action.payload.keyword;
      const order = action.payload.order;
      const newDispalyedTransactions = [...state.displayedTransactions].sort(
        (a, b) => {
          if (typeof a[keyword] == "number") {
            if (order < 0) return b[keyword] - a[keyword];
            else return a[keyword] - b[keyword];
          } else if (typeof a[keyword] == "string") {
            if (order < 0) return b[keyword].localeCompare(a[keyword]);
            else return a[keyword].localeCompare(b[keyword]);
          }
        }
      );
      const newSortOrder = { ...state.sortOrder };
      newSortOrder[keyword] *= -1;
      return {
        ...state,
        displayedTransactions: newDispalyedTransactions,
        sortOrder: newSortOrder,
      };
    }
    default:
      return state;
  }
};
