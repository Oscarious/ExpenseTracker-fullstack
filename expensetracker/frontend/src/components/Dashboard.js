import React from 'react';
import Balance from './Balance';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';

export const Dashboard = () => {
  return (
    <>
      <Balance />
      <TransactionList />
      <AddTransaction />
    </>
  )
}
