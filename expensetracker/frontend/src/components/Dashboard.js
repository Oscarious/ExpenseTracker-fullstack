import React, { Fragment } from "react";
import { Navigate } from "react-router";
import Balance from "./Balance";
import TransactionList from "./TransactionList";
import store from "../store";
import SearchPanel from "./SearchPanel";

export const Dashboard = (props) => {
  const isAuthenticated = store.getState().authReducer.isAuthenticated;
  if (isAuthenticated)
    return (
      <div className={props.className}>
        <SearchPanel className='col-span-1 m-4' />
        <TransactionList className='bg-white col-span-3 shadow-md' />
        <Balance className='col-span-1 m-4' />
      </div>
    );
  else return <Navigate to='/login' />;
};
