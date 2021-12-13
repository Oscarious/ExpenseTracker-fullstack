import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getTransactions } from "../actions/transactions";
import Transaction from "./Transaction";

export const TransactionList = (props) => {
  useEffect(() => {
    props.getTransactions();
  }, []);

  const date2Transactions = {};
  const dates = [];
  props.transactions.forEach(transaction => {
    if (!date2Transactions[transaction.created_at]) {
      date2Transactions[transaction.created_at] = [];
      dates.push(transaction.created_at);
    }
    date2Transactions[transaction.created_at].push(transaction);
  });
  dates.sort((d1, d2) => d2.localeCompare(d1));

  return (
    <div className='mt-5'>
      <h2 className='text-lg uppercase font-semibold border-solid border-b-2'>
        History
      </h2>
      <ul className='mt-4'>
        {dates.map((date) => {
          const dateHeading = (
            <div className='grid place-items-center mt-5 cursor-default'>
              <h3 className='text-center ring-4 ring-gray-300 rounded-lg font-medium text-2xl px-4'>
                {date}
              </h3>
            </div>
          );
          const transactions = date2Transactions[date].map((transaction) => {
            return (
              <Transaction key={transaction.id} transaction={transaction} />
            );
          });
          return (
            <Fragment key={date}>
              {dateHeading}
              {transactions}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  transactions: state.transactionsReducer.transactions,
});

export default connect(mapStateToProps, {
  getTransactions,
})(TransactionList);
