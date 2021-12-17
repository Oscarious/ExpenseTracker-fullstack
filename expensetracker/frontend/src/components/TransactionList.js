import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTransactions } from "../actions/transactions";
import { Overlay } from "./layout/Overlay";
import Transaction from "./Transaction";
import EditTransaction from "./EditTransaction";

export const TransactionList = (props) => {
  useEffect(() => {
    props.getTransactions();
  }, []);

  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={props.className + " relative"}>
      <Overlay isHidden={isHidden} className='grid place-items-center'>
        <EditTransaction onCancel={() => setIsHidden(true)} />
      </Overlay>
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
                <td>{transaction.subject}</td>
                <td>${transaction.amount}</td>
                <td>{transaction.text}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className='absolute bottom-6 right-6 font-bold text-xl text-white border-2 bg-red-500 rounded-full w-12 h-12 hover:ring-2 ring-red-300'
        onClick={() => setIsHidden(!isHidden)}
      >
        +
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  transactions: state.transactionsReducer.transactions,
});

export default connect(mapStateToProps, {
  getTransactions,
})(TransactionList);
