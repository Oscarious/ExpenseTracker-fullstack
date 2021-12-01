import React, { useEffect } from "react";
import { GET_TRANSACTIONS } from "../actions/types";
import { connect } from "react-redux";
import { getTransactions } from "../actions/transactions";

export const Balance = (props) => {
  useEffect(() => {
    props.getTransactions();
  }, []);

  let income = 0;
  let expense = 0;
  props.transactions.forEach((transaction) => {
    if (transaction.amount < 0) expense += transaction.amount;
    else income += transaction.amount;
  });
  const balance = income + expense;
  const sig = balance < 0 ? "-" : "";
  return (
    <div>
      <h2 className='text-lg uppercase font-semibold'>Your Balance</h2>
      <span className='text-4xl font-semibold'>
        {sig}${Math.abs(balance).toFixed(2)}
      </span>
      <div className='flex justify-evenly mt-4 p-5 bg-white border-2 shadow-lg '>
        <div className='text-center'>
          <h3 className='text-xl'>INCOME</h3>
          <p className='text-xl text-green-600'>
            ${Math.abs(income).toFixed(2)}
          </p>
        </div>
        <span className='border-r-2'></span>
        <div className='text-center'>
          <h3 className='text-xl'>EXPENSE</h3>
          <p className='text-xl text-red-700'>
            -${Math.abs(expense).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  transactions: state.transactionReducer.transactions,
});

export default connect(mapStateToProps, { getTransactions })(Balance);