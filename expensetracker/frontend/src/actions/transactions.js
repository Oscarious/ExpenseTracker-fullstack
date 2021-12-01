import axios from "axios";

import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  GET_TRANSACTIONS,
} from "../actions/types";

export const getTransactions = () => (dispatch) => {
  axios
    .get("/api/v1/transactions")
    .then((res) => {
      dispatch({
        type: GET_TRANSACTIONS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err.reponse.data));
};

export const deleteTransaction = (id) => (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  axios
    .delete(`/api/v1/transactions/${id}`, config)
    .then((res) => {
      console.log("dispatch to call");
      dispatch({
        type: DELETE_TRANSACTION,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addTransaction = (transaction) => (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post("/api/v1/transactions/", transaction, config)
    .then((res) => {
      dispatch({
        type: ADD_TRANSACTION,
        payload: transaction,
      });
    })
    .catch((err) => console.log(err));
};
