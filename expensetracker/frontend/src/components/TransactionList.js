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

  const [editorConfig, setEditorConfig] = useState({
    isHidden: true,
    isDeletable: false,
    transaction: null,
  });

  return (
    <div className={props.className + " relative"}>
      <Overlay isHidden={editorConfig.isHidden} className='grid place-items-center'>
        <EditTransaction
          onCancel={() => {
            setEditorConfig({
              isHidden: true,
              isDeletable: false,
              transaction: editorConfig.transaction,
            });
          }}
          isDeletable={editorConfig.isDeletable}
          transaction={editorConfig.transaction}
        />
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
              <tr
                className='border-b odd:bg-blue-50 hover:bg-blue-200'
                key={transaction.id}
                onClick={() => {
                  setEditorConfig({
                    isHidden: false,
                    isDeletable: true,
                    transaction: transaction
                  })
                }}
              >
                <td className='p-1'>{transaction.created_at}</td>
                <td>{transaction.subject}</td>
                <td>${transaction.amount}</td>
                <td>{transaction.comment}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className='absolute bottom-6 right-6 font-bold text-xl text-white border-2 bg-red-500 rounded-full w-12 h-12 hover:ring-2 ring-red-300'
        onClick={() => {
          setEditorConfig({
            isHidden: !editorConfig.isHidden,
            isDeletable: false,
            transaction: null,
          });
        }}
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
