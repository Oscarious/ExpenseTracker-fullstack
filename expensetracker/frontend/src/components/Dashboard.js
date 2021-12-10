import React from "react";
import Balance from "./Balance";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import store from "../store";
import { Navigate } from "react-router";

export const Dashboard = () => {
  const isAuthenticated = store.getState().authReducer.isAuthenticated;
  if (isAuthenticated)
    return (
      <>
        <Balance />
        <TransactionList />
        <AddTransaction />
      </>
    );
  else return <Navigate to='/login' />;
};
