import React from "react";
import { connect } from "react-redux";

export const Balance = (props) => {
  let income = 0;
  let expense = 0;
  props.transactions.forEach((transaction) => {
    if (transaction.amount < 0) expense += transaction.amount;
    else income += transaction.amount;
  });
  const balance = income + expense;
  const sig = balance < 0 ? "-" : "";
  return (
    <div className={props.className + " cursor-default"}>
      <div className='border-b flex justify-between pb-1'>
        <span className='text-xs font-light'>Your Balance</span>
      </div>
      <div className='mt-4 text-center text-4xl font-semibold'>
        {sig}${Math.abs(balance).toFixed(2)}
      </div>
      <div className='flex flex-col justify-evenly gap-y-3 overflow-hidden mt-4 p-5 bg-white border-2 shadow-md '>
        <div className='text-center'>
          <h3 className='text-xl'>INCOME</h3>
          <p className='text-xl text-green-600'>
            ${Math.abs(income).toFixed(2)}
          </p>
        </div>
        <span className='border-b-2'></span>
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
  transactions: state.transactionsReducer.transactions,
});

export default connect(mapStateToProps)(Balance);
