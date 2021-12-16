import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTransactions } from "../actions/transactions";
import Transaction from "./Transaction";

export const TransactionList = (props) => {
  useEffect(() => {
    props.getTransactions();
  }, []);

  return (
    <div className={props.className}>
      <table className='bg-white w-full cursor-default'>
        <thead>
          <tr className='text-left h-8'>
            <th className='border-r w-1/6 pl-2'>Date</th>
            <th className='border-r w-1/6 pl-2'>Subject</th>
            <th className='border-r w-1/6 pl-2'>Amount</th>
            <th className='border-r text-center'>Comment</th>
          </tr>
        </thead>
        <tbody className='text-sm'>
          {props.transactions.map((transaction) => {
            return (
              <tr className='border-b odd:bg-blue-50' key={transaction.id}>
                <td className='p-1'>{transaction.created_at}</td>
                <td>{transaction.text}</td>
                <td>${transaction.amount}</td>
                <td>...</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  transactions: state.transactionsReducer.transactions,
});

export default connect(mapStateToProps, {
  getTransactions,
})(TransactionList);
